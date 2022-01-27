import * as fromTask from '../task-actions';
import { TaskState } from '../models/task-store-models';

const initialState: TaskState = {
  pending: false,
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
        pending: true,
      };
    }
    case fromTask.GET_TASKS_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
        tasks: action.payload,
      };
    }
    case fromTask.GET_TASKS_FAILED: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
