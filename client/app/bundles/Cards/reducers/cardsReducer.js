import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';

// TODO - refactor!
function buildIdMap(cardsArray) {
  return cardsArray.reduce((object, card) => {
    object[card.id] = card;
    return object;
  }, {});
}

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS: {
      return Object.assign({}, state, buildIdMap(data.cards));
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
