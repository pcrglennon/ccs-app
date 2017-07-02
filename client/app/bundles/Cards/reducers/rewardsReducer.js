import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';

// TODO - refactor!
function buildIdMap(rewardsArray) {
  return rewardsArray.reduce((object, reward) => {
    object[reward.id] = reward;
    return object;
  }, {});
}

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS: {
      return Object.assign({}, state, buildIdMap(data.rewards));
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
