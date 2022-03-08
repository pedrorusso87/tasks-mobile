import { createAction, props } from '@ngrx/store';
import { UserLoginResponse } from '../../models/login-models';

//Login actions
export const LOGIN = '[LOGIN] user login';
export const LOGIN_SUCCESS = '[LOGIN] user login success';
export const LOGIN_FAILED = '[LOGIN] user login failed';

export const login = createAction(
  LOGIN,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ userLoginResponse: UserLoginResponse }>()
);

export const loginFailed = createAction(LOGIN_FAILED, props<{ error: any }>());
