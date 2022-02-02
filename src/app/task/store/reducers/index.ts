import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTask from './tasks-reducers';
import { TaskState } from '../models/task-store-models';
import { TasksActions } from '../task-actions';

export interface TaskPageState {
  getTasks: TaskState;
}

export const reducers: ActionReducerMap<TaskPageState, TasksActions> = {
  getTasks: fromTask.reducer,
};

const tasksState = createFeatureSelector<TaskPageState>('tasksState');

export const getTasksState = createSelector(
  tasksState,
  (state: TaskPageState) => state.getTasks
);

export const getTasksPending = createSelector(
  getTasksState,
  (state: TaskState) => state.pending.getTasks
);
export const getTasks = createSelector(
  getTasksState,
  (state: TaskState) => state.tasks
);
export const getTasksError = createSelector(
  getTasksState,
  (state: TaskState) => state.error
);
