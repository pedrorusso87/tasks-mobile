import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromLogin from './login-reducer';
import * as fromRegister from './register-reducer';
import * as fromRoot from '../../../reducers';
export interface UserState {
  user: fromLogin.State;
  registerUser: fromRegister.State;
}
export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  user: fromLogin.reducer,
  registerUser: fromRegister.reducer,
};

const selectUser = createFeatureSelector<UserState>('auth');
const registeredUserState = createSelector(
  selectUser,
  (state: UserState) => state.registerUser
);

export const selectUserState = createSelector(
  selectUser,
  (state: UserState) => state.user
);

export const selectLoginUserPending = createSelector(
  selectUserState,
  (state) => state.pending
);
export const selectLoginSuccess = createSelector(
  selectUserState,
  (state) => state.user
);
export const selectLoginError = createSelector(
  selectUserState,
  (state) => state.error
);
export const registerUser = createSelector(
  registeredUserState,
  (state) => state.username
);
export const registerUserPending = createSelector(
  registeredUserState,
  (state) => state.registerPending
);
export const registerUserError = createSelector(
  registeredUserState,
  (state) => state.error
);
