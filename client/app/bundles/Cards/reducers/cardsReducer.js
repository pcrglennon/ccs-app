import { combineReducers } from 'redux';

import * as actionTypes from '../constants/cardsConstants';
import * as initializeActionTypes from '../constants/initializeConstants';
import buildIdMap from './helpers/buildIdMap';

function byId(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      return Object.assign({}, state, buildIdMap(data.cards));
    default:
      return state;
  }
}

function selectedIds(state = [], action) {
  const { type, data } = action;

  switch (type) {
    case actionTypes.SELECT_CARD: {
      return [
        ...state,
        action.id
      ];
    }
    case actionTypes.DESELECT_CARD:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

export default combineReducers({
  byId: byId,
  selectedIds: selectedIds
});
