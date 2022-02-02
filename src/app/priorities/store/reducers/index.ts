import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPriorities from './priorities-reducer';
import { PrioritiesState } from '../../models/priorities-model';
import { PrioritiesActions } from '../priorities-actions';

export interface PriorityState {
  getPriorities: PrioritiesState;
}

export const reducers: ActionReducerMap<PriorityState, PrioritiesActions> = {
  getPriorities: fromPriorities.reducer,
};

const priorityState = createFeatureSelector<PriorityState>('priorityState');

export const getPrioritiesState = createSelector(
  priorityState,
  (state: PriorityState) => state.getPriorities
);

export const getPrioritiesPending = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.pending
);
export const getPriorities = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.priorities
);
export const getPrioritiesError = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.error
);
