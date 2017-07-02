import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';

// TODO - refactor!
function buildIdMap(rewardCurrenciesArray) {
  return rewardCurrenciesArray.reduce((object, rewardCurrency) => {
    object[rewardCurrency.id] = rewardCurrency;
    return object;
  }, {});
}

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS: {
      return Object.assign({}, state, buildIdMap(data.rewardCurrencies));
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
