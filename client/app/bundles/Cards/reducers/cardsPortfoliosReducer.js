import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';
import * as actionTypes from '../constants/cardsPortfoliosConstants';
import buildIdMap from './helpers/buildIdMap';

// TODO - handle create, destroy loading + errors
function byId(state = {}, action) {
  const { type, data, cardsPortfolio } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      return Object.assign({}, state, buildIdMap(data.cardsPortfolios));
    case actionTypes.CARDS_PORTFOLIOS_CREATE_SUCCESS: {
      return Object.assign({}, state, {
        [cardsPortfolio.id]: cardsPortfolio
      });
    }
    case actionTypes.CARDS_PORTFOLIOS_DESTROY_SUCCESS: {
      const newState = Object.assign({}, state);
      delete newState[cardsPortfolio.id];
      return newState;
    }
    default:
      return state;
  }
}

export default combineReducers({
  byId: byId
});
