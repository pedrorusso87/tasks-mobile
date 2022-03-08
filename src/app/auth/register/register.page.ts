import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserRegistrationRequest } from '../models/user-register';
import * as fromRegister from '../store';
import { AuthService } from 'src/app/services/auth-service';
import { RegisterActions } from '../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('passwordEyeRegister') passwordEye;
  registerForm: FormGroup;
  registerUserPending$ = this.store.select(fromRegister.registerUserPending);
  registerUserError$ = this.store.select(fromRegister.registerUserError);
  registerError = false;
  errorMessage: string;

  email = new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.pattern(
        '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
      ),
    ])
  );
  username = new FormControl('', Validators.required);
  password = new FormControl(
    '',
    Validators.compose([Validators.required, Validators.minLength(6)])
  );
  confirmedPassword = new FormControl('', Validators.required);
  userRegistrationRequest = {};
  passwordTypeInput = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store,
    private loadingController: LoadingController,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: this.email,
      username: this.username,
      password: this.password,
      confirmedPassword: this.confirmedPassword,
    });
  }

  ngOnInit() {}

  register(): void {
    this.userRegistrationRequest = {
      username: this.getUsername(),
      email: this.getEmail(),
      password: this.getPassword(),
    };

    this.store.dispatch(
      RegisterActions.registerUser({
        username: this.getUsername(),
        role: this.getEmail(),
        password: this.getPassword(),
      })
    );
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.listenForRegister();
  }

  listenForRegister(): void {
    this.registerUserPending$.pipe().subscribe((pending) => {
      if (!pending) {
        this.listenForError();
      }
    });
  }

  validatePassword() {
    if (this.getConfirmedPassword() !== this.getPassword()) {
      this.registerForm.get('confirmedPassword').setErrors({ invalid: true });
    } else {
      this.registerForm.get('confirmedPassword').setErrors(null);
    }
  }

  togglePasswordMode() {
    this.passwordTypeInput =
      this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  getUsername(): any {
    return this.registerForm.get('username')?.value;
  }

  getConfirmedPassword(): any {
    return this.registerForm.get('confirmedPassword')?.value;
  }

  private listenForError() {
    this.registerUserError$.pipe().subscribe((error) => {
      if (!error) {
        this.registerError = false;
        this.loadingController.dismiss();
        this.router.navigate(['/home']);
      } else {
        this.setErrorMessage(error);
        this.registerError = true;
        this.loadingController.dismiss();
      }
    });
  }

  private setErrorMessage(error: any): void {
    if (error.status === 0) {
      this.errorMessage = 'Hubo un error al procesar la solicitud';
    } else {
      this.errorMessage = error.message;
    }
  }
}
