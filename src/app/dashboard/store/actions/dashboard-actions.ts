import { createAction, props } from '@ngrx/store';
import { UserDashboardsResponse } from '../../models/dashboard-model';

//Dashboard actions GET user dashboards
export const GET_USER_DASHBOARDS = '[DASHBOARDS] get user dashboards';
export const GET_USER_DASHBOARDS_SUCCESS =
  '[DASHBOARDS] get user dashboards success';
export const GET_USER_DASHBOARDS_FAILED =
  '[DASHBOARDS] get user dashboards failed';

export const getUserDashboards = createAction(
  GET_USER_DASHBOARDS,
  props<{ username: string }>()
);

export const getUserDashboardsSuccess = createAction(
  GET_USER_DASHBOARDS_SUCCESS,
  props<{ userDashboards: UserDashboardsResponse }>()
);

export const getUserDashboardsFailed = createAction(
  GET_USER_DASHBOARDS_FAILED,
  props<{ error: any }>()
);
