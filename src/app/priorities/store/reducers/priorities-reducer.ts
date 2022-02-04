import { Action, createReducer, on } from '@ngrx/store';
import { PrioritiesResponse } from '../../models/priorities-model';
import { PrioritiesActions } from '../actions';

export interface State {
  pending: boolean;
  error: boolean;
  priorities: PrioritiesResponse;
}

const initialState: State = {
  pending: false,
  error: null,
  priorities: null,
};

const prioritiesReducer = createReducer(
  initialState,
  on(PrioritiesActions.GetPriorities, (state) => ({ ...state, pending: true })),
  on(PrioritiesActions.GetPrioritiesSuccess, (state, { priorities }) => ({
    ...state,
    pending: false,
    priorities,
  })),
  on(PrioritiesActions.GetPrioritiesFailed, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);
export function reducer(state: State | undefined, action: Action) {
  return prioritiesReducer(state, action);
}
