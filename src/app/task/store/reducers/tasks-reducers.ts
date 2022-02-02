import * as fromTask from '../task-actions';
import { TaskState } from '../models/task-store-models';

const initialState: TaskState = {
  pending: {
    getTasks: false,
    addTask: false,
    deleteTask: false,
  },
  error: null,
  tasks: null,
};

export const reducer = (
  state = initialState,
  action: fromTask.TasksActions
): TaskState => {
  switch (action.type) {
    case fromTask.GET_TASKS: {
      return {
        ...state,
        pending: { ...state.pending, getTasks: true },
      };
    }
    case fromTask.GET_TASKS_SUCCESS: {
      return {
        ...state,
        pending: { ...state.pending, getTasks: false },
        error: null,
        tasks: action.payload,
      };
    }
    case fromTask.GET_TASKS_FAILED: {
      return {
        ...state,
        pending: { ...state.pending, getTasks: false },
        error: action.payload,
      };
    }
    case fromTask.ADD_TASK: {
      return {
        ...state,
        pending: { ...state.pending, addTask: true },
      };
    }
    case fromTask.ADD_TASK_SUCCESS: {
      return {
        ...state,
        pending: { ...state.pending, getTasks: false },
        error: null,
      };
    }
    case fromTask.ADD_TASK_FAILED: {
      return {
        ...state,
        pending: { ...state.pending, getTasks: false },
        error: action.payload,
      };
    }
    case fromTask.DELETE_TASK: {
      return {
        ...state,
        pending: { ...state.pending, deleteTask: true },
      };
    }
    case fromTask.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        pending: { ...state.pending, deleteTask: false },
      };
    }
    case fromTask.DELETE_TASK_FAILED: {
      return {
        ...state,
        pending: { ...state.pending, deleteTask: false },
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
