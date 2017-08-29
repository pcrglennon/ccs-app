import graphQLRequest from '../utils/graphQLRequest';

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

function createPortfolioBegin() {
  return {
    type: actionTypes.PORTFOLIOS_CREATE_BEGIN
  };
}

function createPortfolioSuccess(data) {
  return {
    type: actionTypes.PORTFOLIOS_CREATE_SUCCESS,
    portfolio: data.createPortfolio
  };
}

function createPortfolioErrors(errors) {
  return {
    type: actionTypes.PORTFOLIOS_CREATE_ERRORS,
    errors: errors.map((error) => error.message)
  };
}

export function createPortfolio(name) {
  return (dispatch) => {
    dispatch(createPortfolioBegin());

    const graphQLString = `
      mutation createPortfolio($name: String!) {
        createPortfolio(name: $name) {
          id name
        }
      }
    `;

    const variables = {
      name: name
    };

    return graphQLRequest(graphQLString, variables)
      .then((json) => {
        if (json.errors) {
          dispatch(createPortfolioErrors(json.errors));
        } else {
          dispatch(createPortfolioSuccess(json.data));
        }
      });
  };
}
