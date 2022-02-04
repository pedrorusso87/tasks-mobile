import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTask from './tasks-reducers';
import * as fromRoot from '../../../reducers';
export interface TaskState {
  tasksState: fromTask.State;
}
export interface State extends fromRoot.State {
  tasks: TaskState;
}

export const reducers: ActionReducerMap<TaskState> = {
  tasksState: fromTask.reducer,
};

const selectTask = createFeatureSelector<TaskState>('tasks');

export const selectTaskState = createSelector(
  selectTask,
  (state: TaskState) => state.tasksState
);

export const selectGetTasksPending = createSelector(
  selectTaskState,
  (state) => state.pending.getTasks
);
export const selectGetTasksSuccess = createSelector(
  selectTaskState,
  (state) => state.tasks
);
export const selectGetTasksError = createSelector(
  selectTaskState,
  (state) => state.error
);
