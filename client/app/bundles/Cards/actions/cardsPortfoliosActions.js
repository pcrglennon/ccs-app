import graphQLRequest from '../utils/graphQLRequest';

import * as actionTypes from '../constants/cardsPortfoliosConstants';

function createCardsPortfolioBegin() {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_CREATE_BEGIN
  };
}

function createCardsPortfolioSuccess(data) {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_CREATE_SUCCESS,
    cardsPortfolio: data.createCardsPortfolio
  };
}

function createCardsPortfolioErrors(errors) {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_CREATE_ERRORS,
    errors: errors.map((error) => error.message)
  };
}

export function addCardToPortfolio(cardId, portfolioId) {
  return (dispatch) => {
    dispatch(createCardsPortfolioBegin());

    const graphQLString = `
      mutation createCardsPortfolio($cardId: ID!, $portfolioId: ID!) {
        createCardsPortfolio(cardId: $cardId, portfolioId: $portfolioId) {
          id cardId portfolioId
        }
      }
    `;

    const variables = {
      cardId: cardId,
      portfolioId: portfolioId
    };

    return graphQLRequest(graphQLString, variables)
      .then((json) => {
        if (json.errors) {
          dispatch(createCardsPortfolioErrors(json.errors));
        } else {
          dispatch(createCardsPortfolioSuccess(json.data));
        }
      });
  };
}

function destroyCardsPortfolioBegin() {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_DESTROY_BEGIN
  };
}

function destroyCardsPortfolioSuccess(data) {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_DESTROY_SUCCESS,
    cardsPortfolio: data.destroyCardsPortfolio
  };
}

function destroyCardsPortfolioErrors(errors) {
  return {
    type: actionTypes.CARDS_PORTFOLIOS_DESTROY_ERRORS,
    errors: errors.map((error) => error.message)
  };
}

export function removeCardFromPortfolio(cardsPortfolioId) {
  return (dispatch) => {
    dispatch(destroyCardsPortfolioBegin());

    const graphQLString = `
      mutation destroyCardsPortfolio($id: ID!) {
        destroyCardsPortfolio(id: $id) {
          id cardId portfolioId
        }
      }
    `;

    const variables = {
      id: cardsPortfolioId
    };

    return graphQLRequest(graphQLString, variables)
      .then((json) => {
        if (json.errors) {
          dispatch(destroyCardsPortfolioErrors(json.errors));
        } else {
          dispatch(destroyCardsPortfolioSuccess(json.data));
        }
      });
  };
}
