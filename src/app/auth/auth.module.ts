import { CommonModule, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginPage } from './login/login.page';
import LoginEffects from './store/effects/login-effects';
import RegisterEffects from './store/effects/register-effects';
import * as fromAuth from './store/reducers';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.reducers),
    EffectsModule.forFeature([LoginEffects, RegisterEffects]),
  ],
  declarations: [LoginPage],
})
export class AuthModule {}
