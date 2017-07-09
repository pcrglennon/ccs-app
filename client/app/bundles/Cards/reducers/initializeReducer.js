import { combineReducers } from 'redux';

import * as actionTypes from '../constants/initializeConstants';

function isFetching(state = false, action) {
  switch (action.type) {
    case actionTypes.INITIALIZE_BEGIN:
      return true;
    case actionTypes.INITIALIZE_ERRORS:
      return false;
    case actionTypes.INITIALIZE_SUCCESS:
      return false;
    default:
      return state;
  }
}

function errors(state = [], action) {
  const { type, errors } = action;

  switch (type) {
    case actionTypes.INITIALIZE_ERRORS: {
      return [
        ...state,
        ...errors
      ];
    }
    case actionTypes.INITIALIZE_SUCCESS: {
      return [];
    }
    default:
      return state;
  }
}

export default combineReducers({
  isFetching: isFetching,
  errors: errors
});
