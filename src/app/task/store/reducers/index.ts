import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromHome from './home-reducers';
import { TaskState } from '../models/task-store-models';
import { TasksActions } from '../task-actions';

export interface TaskPageState {
  tasks: TaskState;
}

export const reducers: ActionReducerMap<TaskPageState, TasksActions> = {
  tasks: fromHome.reducer,
};

const tasksState = createFeatureSelector<TaskPageState>('tasks');

export const getTasksState = createSelector(
  tasksState,
  (state: TaskPageState) => state.tasks
);

export const getTasksPending = createSelector(
  getTasksState,
  (state: TaskState) => state.pending
);
export const getTasks = createSelector(
  getTasksState,
  (state: TaskState) => state.tasks
);
export const getTasksError = createSelector(
  getTasksState,
  (state: TaskState) => state.error
);
