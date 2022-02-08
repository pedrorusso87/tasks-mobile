import { Action, createReducer, on } from '@ngrx/store';
import { TasksStatus } from 'src/app/services/tasks-status-service';
import { TaskStatusActions } from '../actions';
export interface State {
  pending: boolean;
  error: null;
  tasksStatus: TasksStatus[];
}

const initialState: State = {
  pending: false,
  error: null,
  tasksStatus: [],
};

const taskStatusReducer = createReducer(
  initialState,
  on(TaskStatusActions.getTasksStatus, (state) => ({
    ...state,
    pending: true,
  })),
  on(TaskStatusActions.getTasksStatusSuccess, (state, { tasksStatus }) => ({
    ...state,
    pending: false,
    error: null,
    tasksStatus,
  })),
  on(TaskStatusActions.getTasksStatusFailed, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return taskStatusReducer(state, action);
}
