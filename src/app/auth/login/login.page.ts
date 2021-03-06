import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as fromLogin from '../store';
import { LoginActions } from '../store/actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  @ViewChild('passwordEyeRegister') passwordEye;
  loginError = false;
  errorMessage: string;

  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  passwordTypeInput = 'password';
  passwordIcon = 'eye-off';
  getUserSubscription: Subscription;
  getUserPendingSubscription: Subscription;
  getUserLoginErrorSubscription: Subscription;
  getUser$ = this.store.select(fromLogin.selectLoginSuccess);
  getUserPending$ = this.store.select(fromLogin.selectLoginUserPending);
  getUserLoginError$ = this.store.select(fromLogin.selectLoginError);

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
    this.store.dispatch(
      LoginActions.login({
        username: this.getEmail(),
        password: this.getPassword(),
      })
    );
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      id: 'loading-controller',
    });
    await loading.present();
    this.dismissModal();
  }

  dismissModal() {
    this.getUserPendingSubscription = this.getUserPending$.subscribe(pending => {
      if(!pending) {
        this.getUserSubscription = this.getUser$.subscribe(user => {
          if(user) {
            this.loadingController.dismiss();
            this.router.navigate(['tasks']);

          } else {
            this.loginError = true;
            this.getUserLoginErrorSubscription = this.getUserLoginError$.subscribe(error => {
              this.setErrorMessage(error);
            });
          }
          this.loadingController.dismiss();
        });
      }
    });
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

  ngOnDestroy(): void {
    this.getUserPendingSubscription.unsubscribe();
    this.getUserSubscription.unsubscribe();
    this.getUserLoginErrorSubscription.unsubscribe();
  }

  private setErrorMessage(error: any): void {
    if (error.status === 400) {
      this.errorMessage = 'Usuario o contrase??a inv??lidos';
    } else {
      this.errorMessage = 'Hubo un error al procesar la solicitud';
    }
    this.loginForm.get('password').setValue('');
  }
}
