import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';
import * as actionTypes from '../constants/portfoliosConstants';
import buildIdMap from './helpers/buildIdMap';

function byId(state = {}, action) {
  function updatePortfolio(id, updatedPortfolioAttributes, attributeToUpdate) {
    return Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {
        [attributeToUpdate]: updatedPortfolioAttributes[attributeToUpdate]
      })
    });
  }

  function addCardToPortfolio(id, cardId) {
    const cardIds = state[id].cardIds.concat([cardId]);

    return updatePortfolio(id, { cardIds: cardIds }, 'cardIds');
  }

  function removeCardFromPortfolio(id, cardId) {
    const cardIds = state[id].cardIds.filter(id => id !== cardId);

    return updatePortfolio(id, { cardIds: cardIds }, 'cardIds');
  }

  const { type, data, id, portfolio, cardId } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      // return Object.assign({}, state, buildIdMap(data.portfolios));
      // Prepopulate w/ dummy objects until Portfolios are saved on backend
      return Object.assign({}, state, {
        '1': { id: '1', name: 'Dummy 1', cardIds: [] },
        '2': { id: '2', name: 'Dummy 2', cardIds: [] }
      });
    case actionTypes.PORTFOLIOS_CREATE: {
      return Object.assign({}, state, {
        [portfolio.id]: portfolio
      });
    }
    case actionTypes.PORTFOLIOS_ADD_CARD_TO_PORTFOLIO:
      return addCardToPortfolio(id, cardId);
    case actionTypes.PORTFOLIOS_REMOVE_CARD_FROM_PORTFOLIO:
      return removeCardFromPortfolio(id, cardId);
    default:
      return state;
  }
}

function selectedId(state = '', action) {
  const { type, id, portfolio } = action;

  switch (type) {
    case actionTypes.PORTFOLIOS_SET_SELECTED_ID:
      return id;
    case actionTypes.PORTFOLIOS_CREATE:
      return portfolio.id;
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
    case actionTypes.PORTFOLIOS_CREATE:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  byId: byId,
  selectedId: selectedId,
  managingCards: managingCards
});
