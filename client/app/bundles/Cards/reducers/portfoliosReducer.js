import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';
import * as actionTypes from '../constants/portfoliosConstants';
import buildIdMap from './helpers/buildIdMap';

function byId(state = {}, action) {
  const { type, data, portfolio } = action;

  // TODO - handle create loading + errors
  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      return Object.assign({}, state, buildIdMap(data.portfolios));
    case actionTypes.PORTFOLIOS_CREATE_SUCCESS: {
      return Object.assign({}, state, {
        [portfolio.id]: portfolio
      });
    }
    case actionTypes.PORTFOLIOS_DESTROY_SUCCESS: {
      const newState = Object.assign({}, state);
      delete newState[portfolio.id];
      return newState;
    }
    default:
      return state;
  }
}

function selectedId(state = '', action) {
  const { type, id, portfolio } = action;

  switch (type) {
    case actionTypes.PORTFOLIOS_SET_SELECTED_ID:
      return id;
    case actionTypes.PORTFOLIOS_CREATE_SUCCESS:
      return portfolio.id;
    case actionTypes.PORTFOLIOS_DESTROY_SUCCESS:
      return '';
    default:
      return state;
  }
}

function managingCards(state = false, action) {
  const { type, toggleValue } = action;

  switch (type) {
    case actionTypes.PORTFOLIOS_TOGGLE_MANAGING_CARDS:
      return toggleValue;
    case actionTypes.PORTFOLIOS_SET_SELECTED_ID:
      return false;
    case actionTypes.PORTFOLIOS_CREATE_SUCCESS:
      return true;
    case actionTypes.PORTFOLIOS_DESTROY_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  byId: byId,
  selectedId: selectedId,
  managingCards: managingCards
});
