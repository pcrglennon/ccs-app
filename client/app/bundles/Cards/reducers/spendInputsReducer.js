import { combineReducers } from 'redux';

import * as initializeActionTypes from '../constants/initializeConstants';
import * as actionTypes from '../constants/spendInputsConstants';

function buildIdMap(spendCategoriesArray) {
  return spendCategoriesArray.reduce((object, spendCategory) => {
    object[spendCategory.id] = { amount: 0.0 };
    return object;
  }, {});
}

function bySpendCategoryId(state = {}, action) {
  const { type, data, spendCategoryId, newAmount } = action;

  switch (type) {
    case initializeActionTypes.INITIALIZE_SUCCESS:
      return Object.assign({}, state, buildIdMap(data.spendCategories));
    case actionTypes.UPDATE_SPEND_INPUT: {
      return Object.assign({}, state, {
        [spendCategoryId]: Object.assign({}, state[spendCategoryId], {
          amount: newAmount
        })
      });
    }
    default:
      return state;
  }
}

export default combineReducers({
  bySpendCategoryId: bySpendCategoryId
});
