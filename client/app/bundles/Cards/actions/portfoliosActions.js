import graphQLRequest from '../utils/graphQLRequest';

import * as actionTypes from '../constants/portfoliosConstants';

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

function destroyPortfolioBegin() {
  return {
    type: actionTypes.PORTFOLIOS_DESTROY_BEGIN
  };
}

function destroyPortfolioSuccess(data) {
  return {
    type: actionTypes.PORTFOLIOS_DESTROY_SUCCESS,
    portfolio: data.destroyPortfolio
  };
}

function destroyPortfolioErrors(errors) {
  return {
    type: actionTypes.PORTFOLIOS_DESTROY_ERRORS,
    errors: errors.map((error) => error.message)
  };
}

export function destroyPortfolio(id) {
  return (dispatch) => {
    dispatch(destroyPortfolioBegin());

    const graphQLString = `
      mutation destroyPortfolio($id: ID!) {
        destroyPortfolio(id: $id) {
          id name
        }
      }
    `;

    const variables = {
      id: id
    };

    return graphQLRequest(graphQLString, variables)
      .then((json) => {
        if (json.errors) {
          dispatch(destroyPortfolioErrors(json.errors));
        } else {
          dispatch(destroyPortfolioSuccess(json.data));
        }
      });
  };
}

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
