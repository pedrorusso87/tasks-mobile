import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPriorities from './priorities-reducer';
import * as fromRoot from '../../../reducers';

export interface PriorityState {
  prioritiesState: fromPriorities.State;
}

export interface State extends fromRoot.State {
  priorities: PriorityState;
}

export const reducers: ActionReducerMap<PriorityState> = {
  prioritiesState: fromPriorities.reducer,
};

const priorityState = createFeatureSelector<PriorityState>('priorities');

export const selectPrioritiesState = createSelector(
  priorityState,
  (state: PriorityState) => {
    console.log(state);
    return state.prioritiesState;
  }
);

export const selectGetPrioritiesPending = createSelector(
  selectPrioritiesState,
  (state) => state.pending
);
export const selectGetPriorities = createSelector(
  selectPrioritiesState,
  (state) => state.priorities
);
export const selectGetPrioritiesError = createSelector(
  selectPrioritiesState,
  (state) => state.error
);
