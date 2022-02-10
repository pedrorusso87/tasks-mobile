import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromDashboards from './dashboard-reducer';
import * as fromRoot from '../../../reducers';

export interface UserDashboardState {
  userDashboards: fromDashboards.State;
}
export interface State extends fromRoot.State {
  userDashboards: UserDashboardState;
}

export const reducers: ActionReducerMap<UserDashboardState> = {
  userDashboards: fromDashboards.reducer,
};

const selectDashboard = createFeatureSelector<UserDashboardState>('dashboard');

export const selectDashboardState = createSelector(
  selectDashboard,
  (state: UserDashboardState) => state.userDashboards
);

export const selectUserDashboardsPending = createSelector(
  selectDashboardState,
  (state) => state.pending
);
export const selectUserDashboards = createSelector(
  selectDashboardState,
  (state) => state.userDashboards
);
export const selectUserDashboardsError = createSelector(
  selectDashboardState,
  (state) => state.error
);
