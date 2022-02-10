import { Action, createReducer, on } from '@ngrx/store';
import { UserDashboardsResponse } from '../../models/dashboard-model';
import { DashboardActions } from '../actions';

export interface State {
  pending: boolean;
  error: null;
  userDashboards: UserDashboardsResponse[];
}

const initialState: State = {
  pending: false,
  error: null,
  userDashboards: null,
};

const userDashboardReducer = createReducer(
  initialState,
  on(DashboardActions.getUserDashboards, (state) => ({
    ...state,
    pending: true,
  })),
  on(
    DashboardActions.getUserDashboardsSuccess,
    (state, { userDashboards }) => ({
      ...state,
      pending: false,
      error: null,
      userDashboards,
    })
  ),
  on(DashboardActions.getUserDashboardsFailed, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userDashboardReducer(state, action);
}
