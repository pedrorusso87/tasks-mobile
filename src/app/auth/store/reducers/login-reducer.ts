import { Action, createReducer, on } from '@ngrx/store';
import { UserLoginResponse } from '../../models/login-models';
import { LoginActions } from '../actions';
export interface State {
  pending: boolean;
  error: null;
  user: UserLoginResponse;
}

const initialState: State = {
  pending: false,
  error: null,
  user: null,
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({
    ...state,
    pending: true,
  })),
  on(LoginActions.loginSuccess, (state, { userLoginResponse }) => ({
    ...state,
    pending: false,
    error: null,
    user: userLoginResponse,
  })),
  on(LoginActions.loginFailed, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
