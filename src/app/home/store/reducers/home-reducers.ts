import * as fromHome from '../home-actions';
import { from } from 'rxjs';
import { HomeState } from '../models/home-store-models';

const initialState: HomeState = {
  pending: false,
  error: null,
  tasks: null,
};

export const reducer = (
  state = initialState,
  action: fromHome.TasksActions
): HomeState => {
  switch (action.type) {
    case fromHome.GET_TASKS: {
      return {
        ...state,
        pending: true,
      };
    }
    case fromHome.GET_TASKS_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
        tasks: action.payload,
      };
    }
    case fromHome.GET_TASKS_FAILED: {
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
