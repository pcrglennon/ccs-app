import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';
import buildIdMap from './helpers/buildIdMap';

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      return Object.assign({}, state, buildIdMap(data.spendCategories));
    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
