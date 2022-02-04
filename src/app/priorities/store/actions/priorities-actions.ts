import { Action, createAction, props } from '@ngrx/store';
import { PrioritiesResponse } from '../../models/priorities-model';

//Actions GET Priorities
export const GET_PRIORITIES = '[PRIORITIES] get priorities';
export const GET_PRIORITIES_SUCCESS = '[PRIORITIES] get priorities success';
export const GET_PRIORITIES_FAILED = '[PRIORITIES] get priorities failed';

export const GetPriorities = createAction(GET_PRIORITIES);
export const GetPrioritiesSuccess = createAction(
  GET_PRIORITIES_SUCCESS,
  props<{ priorities: PrioritiesResponse }>()
);
export const GetPrioritiesFailed = createAction(
  GET_PRIORITIES_FAILED,
  props<{ error: any }>()
);
