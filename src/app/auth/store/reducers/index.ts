import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromLogin from './login-reducer';
import * as fromRoot from '../../../reducers';
export interface UserState {
  user: fromLogin.State;
}
export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  user: fromLogin.reducer,
};

const selectUser = createFeatureSelector<UserState>('auth');

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
