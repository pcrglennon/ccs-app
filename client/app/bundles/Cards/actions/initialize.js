import graphQLRequest from '../utils/graphQLRequest';

import * as actionTypes from '../constants/initializeConstants';

function initializeBegin() {
  return {
    type: actionTypes.INITIALIZE_BEGIN
  };
}

function initializeSuccess(data) {
  return {
    type: actionTypes.INITIALIZE_SUCCESS,
    data: data
  };
}

function initializeErrors(errors) {
  return {
    type: actionTypes.INITIALIZE_ERRORS,
    errors: errors.map((error) => error.message)
  };
}

export function initialize() {
  return (dispatch) => {
    dispatch(initializeBegin());

    const graphQLString = `
      query {
        cards {
          id name
        }

        rewards {
          id percentage cardId rewardCurrencyId spendCategoryId
        }

        rewardCurrencies {
          id name valueCents
        }

        spendCategories {
          id name
        }
      }
    `;

    return graphQLRequest(graphQLString, {})
      .then((json) => {
        if (json.errors) {
          dispatch(initializeErrors(json.errors));
        } else {
          dispatch(initializeSuccess(json.data));
        }
      });
  };
}
