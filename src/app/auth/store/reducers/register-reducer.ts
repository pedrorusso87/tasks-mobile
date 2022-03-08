import { Action, createReducer, on } from '@ngrx/store';
import { RegisterActions } from '../actions';

export interface State {
  registerPending: boolean;
  error: null;
  username: null;
}

const initialState: State = {
  registerPending: false,
  error: null,
  username: null,
};

const registerReducer = createReducer(
  initialState,
  on(RegisterActions.registerUser, (state) => ({
    ...state,
    registerPending: true,
  })),
  on(RegisterActions.registerUserSuccess, (state, { registerResponse }) => ({
    ...state,
    registerPending: false,
    error: null,
    username: registerResponse,
  })),
  on(RegisterActions.registerUserFailed, (state, { error }) => ({
    ...state,
    registerPending: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return registerReducer(state, action);
}
