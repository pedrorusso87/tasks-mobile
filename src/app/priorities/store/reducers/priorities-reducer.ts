import { PrioritiesState } from '../../models/priorities-model';
import * as fromPriorities from '../priorities-actions';

const initialState: PrioritiesState = {
  pending: false,
  error: null,
  priorities: null,
};

export const reducer = (
  state = initialState,
  action: fromPriorities.PrioritiesActions
): PrioritiesState => {
  switch (action.type) {
    case fromPriorities.GET_PRIORITIES: {
      return {
        ...state,
        pending: true,
      };
    }
    case fromPriorities.GET_PRIORITIES_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
        priorities: action.payload,
      };
    }
    case fromPriorities.GET_PRIORITIES_FAILED: {
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
