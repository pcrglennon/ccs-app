import * as actionTypes from '../constants/spendCategoriesConstants';

const initialState = {
  spendCategories: [],
  isFetching: false,
  fetchErrorMessage: ''
};

export default function spendCategoriesReducer(state = initialState, action) {
  const { type, spendCategories, error } = action;

  switch (type) {
    case actionTypes.FETCH_SPEND_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        spendCategories: spendCategories,
        fetchErrorMessage: '',
        isFetching: false
      });
    }

    case actionTypes.FETCH_SPEND_CATEGORIES_ERROR: {
      return Object.assign({}, state, {
        fetchErrorMessage: error,
        isFetching: false
      });
    }

    case actionTypes.FETCH_SPEND_CATEGORIES_BEGIN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }

    default:
      return state;
  }
}
