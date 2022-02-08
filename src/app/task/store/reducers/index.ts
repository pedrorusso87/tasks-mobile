import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTask from './tasks-reducer';
import * as fromTaskStatus from './tasks-status-reducer';
import * as fromRoot from '../../../reducers';
export interface TaskState {
  tasks: fromTask.State;
  statuses: fromTaskStatus.State;
}
export interface State extends fromRoot.State {
  tasks: TaskState;
  statuses: TaskState;
}

export const reducers: ActionReducerMap<TaskState> = {
  tasks: fromTask.reducer,
  statuses: fromTaskStatus.reducer,
};

const selectTask = createFeatureSelector<TaskState>('tasks');

export const selectTaskState = createSelector(
  selectTask,
  (state: TaskState) => state.tasks
);

export const selectTaskStatusState = createSelector(
  selectTask,
  (state: TaskState) => state.statuses
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

export const selectGetTasksStatusPending = createSelector(
  selectTaskStatusState,
  (state) => state.pending
);
export const selectGetTasksStatus = createSelector(
  selectTaskStatusState,
  (state) => state.tasksStatus
);
export const selectGetTasksStatusError = createSelector(
  selectTaskStatusState,
  (state) => state.error
);
