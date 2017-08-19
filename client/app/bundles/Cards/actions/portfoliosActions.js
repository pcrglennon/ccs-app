import * as actionTypes from '../constants/portfoliosConstants';

export function setSelectedPortfolioId(id) {
  return {
    type: actionTypes.PORTFOLIOS_SET_SELECTED_ID,
    id: id
  };
}

export function toggleManagingPortfolioCards(toggleValue) {
  return {
    type: actionTypes.PORTFOLIOS_TOGGLE_MANAGING_CARDS,
    toggleValue: toggleValue
  };
}

// Stubbed until Portfolios are persisted in backend
export function createPortfolio(name) {
  return {
    type: actionTypes.PORTFOLIOS_CREATE,
    portfolio: {
      id: "" + parseInt(Math.random() * (1000 - 1) + 1),
      name: name,
      cardIds: []
    }
  };
}

export function addCardToPortfolio(id, cardId) {
  return {
    type: actionTypes.PORTFOLIOS_ADD_CARD_TO_PORTFOLIO,
    id: id,
    cardId: cardId
  };
}

export function removeCardFromPortfolio(id, cardId) {
  return {
    type: actionTypes.PORTFOLIOS_REMOVE_CARD_FROM_PORTFOLIO,
    id: id,
    cardId: cardId
  };
}
