import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/spendCategoriesConstants';

function fetchSpendCategoriesBegin() {
  return {
    type: actionTypes.FETCH_SPEND_CATEGORIES_BEGIN
  };
}

function fetchSpendCategoriesSuccess(spendCategories) {
  return {
    type: actionTypes.FETCH_SPEND_CATEGORIES_SUCCESS,
    spendCategories: spendCategories
  };
}

function fetchSpendCategoriesError(error) {
  return {
    type: actionTypes.FETCH_SPEND_CATEGORIES_ERROR,
    error: error
  };
}

export function fetchSpendCategories() {
  return (dispatch) => {
    dispatch(fetchSpendCategoriesBegin());

    const request = new Request('/spend_categories.json', {
      credentials: 'same-origin'
    });

    return fetch(request)
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          dispatch(fetchSpendCategoriesError(json.error));
        } else {
          dispatch(fetchSpendCategoriesSuccess(json));
        }
      });
  };
}