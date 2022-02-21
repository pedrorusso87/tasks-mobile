import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('passwordEyeRegister') passwordEye;
  loginError = false;
  errorMessage: string;

  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  passwordTypeInput = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private loadingController: LoadingController,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit() {}

  login() {
    const loginRequest = {
      username: this.getEmail(),
      password: this.getPassword(),
    };
    // this.store.dispatch(new fromLogin.LoginUser(loginRequest));
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      id: 'loading-controller',
    });
    await loading.present();
  }

  togglePasswordMode() {
    this.passwordTypeInput =
      this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }

  getEmail(): any {
    return this.loginForm.get('username')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  private setErrorMessage(error: any): void {
    if (error.status === 400) {
      this.errorMessage = 'Usuario o contraseña inválidos';
    } else {
      this.errorMessage = 'Hubo un error al procesar la solicitud';
    }
  }
}
