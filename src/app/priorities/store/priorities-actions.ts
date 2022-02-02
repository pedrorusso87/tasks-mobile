import { Action } from '@ngrx/store';
import { PrioritiesResponse } from '../models/priorities-model';

//Actions GET Priorities
export const GET_PRIORITIES = '[PRIORITIES] get priorities';
export const GET_PRIORITIES_SUCCESS = '[PRIORITIES] get priorities success';
export const GET_PRIORITIES_FAILED = '[PRIORITIES] get priorities failed';

export class GetPriorities implements Action {
  readonly type = GET_PRIORITIES;
  constructor() {}
}
export class GetPrioritiesSuccess implements Action {
  readonly type = GET_PRIORITIES_SUCCESS;
  constructor(public payload: PrioritiesResponse) {}
}
export class GetPrioritiesFailed implements Action {
  readonly type = GET_PRIORITIES_FAILED;
  constructor(public payload: any) {}
}

// action types
export type PrioritiesActions =
  | GetPriorities
  | GetPrioritiesSuccess
  | GetPrioritiesFailed;
