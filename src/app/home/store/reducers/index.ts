import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromHome from './home-reducers';
import { HomeState } from '../models/home-store-models';
import { TasksActions } from '../home-actions';

export interface HomePageState {
  tasks: HomeState;
}

export const reducers: ActionReducerMap<HomePageState, TasksActions> = {
  tasks: fromHome.reducer,
};

const tasksState = createFeatureSelector<HomePageState>('tasks');

export const getTasksState = createSelector(
  tasksState,
  (state: HomePageState) => state.tasks
);

export const getTasksPending = createSelector(
  getTasksState,
  (state: HomeState) => state.pending
);
export const getTasks = createSelector(
  getTasksState,
  (state: HomeState) => state.tasks
);
export const getTasksError = createSelector(
  getTasksState,
  (state: HomeState) => state.error
);
