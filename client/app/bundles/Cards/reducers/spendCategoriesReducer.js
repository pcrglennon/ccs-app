import * as actionTypes from '../constants/spendCategoriesConstants';

const initialState = {
  byId: {},
  isFetching: false,
  fetchErrorMessage: ''
};

function buildIdMap(spendCategoriesArray) {
  return spendCategoriesArray.reduce((object, spendCategory) => {
    object[spendCategory.id] = spendCategory;
    return object;
  }, {});
}

export default function spendCategoriesReducer(state = initialState, action) {
  const { type, spendCategories, error } = action;

  switch (type) {
    case actionTypes.FETCH_SPEND_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        byId: buildIdMap(spendCategories),
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
