import { Action, createAction, props } from '@ngrx/store';

//Register actions
export const REGISTER_USER = '[AUTH] Register user';
export const REGISTER_USER_SUCCESS = '[AUTH] Register user success';
export const REGISTER_USER_FAILED = '[AUTH] Register user failed';

export const registerUser = createAction(
  REGISTER_USER,
  props<{ username: string; password: string; role: string }>()
);

export const registerUserSuccess = createAction(
  REGISTER_USER_SUCCESS,
  props<{ registerResponse: any }>()
);

export const registerUserFailed = createAction(
  REGISTER_USER_FAILED,
  props<{ error: any }>()
);
