import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';

// TODO - refactor!
function buildIdMap(banksArray) {
  return banksArray.reduce((object, bank) => {
    object[bank.id] = bank;
    return object;
  }, {});
}

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS: {
      return Object.assign({}, state, buildIdMap(data.banks));
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
