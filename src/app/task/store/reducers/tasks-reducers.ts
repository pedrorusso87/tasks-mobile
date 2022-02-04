import { Action, createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/services/task-service';
import { TaskActions } from '../actions';
export interface State {
  pending: {
    getTasks: boolean;
    addTask: boolean;
    deleteTask: boolean;
  };
  error: null;
  tasks: Task[];
}

const initialState: State = {
  pending: {
    getTasks: false,
    addTask: false,
    deleteTask: false,
  },
  error: null,
  tasks: null,
};

const taskReducer = createReducer(
  initialState,
  on(TaskActions.getTasks, (state) => ({
    ...state,
    pending: { ...state.pending, getTasks: true },
  })),
  on(TaskActions.GetTasksSuccess, (state, { tasks }) => ({
    ...state,
    pending: { ...state.pending, getTasks: false },
    error: null,
    tasks,
  })),
  on(TaskActions.GetTasksFailed, (state, { error }) => ({
    ...state,
    pending: { ...state.pending, getTasks: false },
    error,
  })),
  on(TaskActions.AddTask, (state) => ({
    ...state,
    pending: { ...state.pending, addTask: true },
  })),
  on(TaskActions.AddTaskSuccess, (state) => ({
    ...state,
    pending: { ...state.pending, addTask: false },
  })),
  on(TaskActions.AddTaskFailed, (state, { error }) => ({
    ...state,
    pending: { ...state.pending, addTask: false },
    error,
  })),
  on(TaskActions.DeleteTask, (state) => ({
    ...state,
    pending: { ...state.pending, deleteTask: true },
  })),
  on(TaskActions.DeleteTaskSuccess, (state) => ({
    ...state,
    pending: { ...state.pending, deleteTask: false },
  })),
  on(TaskActions.DeleteTaskFailed, (state, { error }) => ({
    ...state,
    pending: { ...state.pending, deleteTask: false },
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
