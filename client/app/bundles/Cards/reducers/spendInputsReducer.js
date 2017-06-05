import { FETCH_SPEND_CATEGORIES_SUCCESS } from '../constants/spendCategoriesConstants';
import * as actionTypes from '../constants/spendInputsConstants';

const initialState = {
  bySpendCategoryId: {}
};

function buildIdMap(spendCategoriesArray) {
  return spendCategoriesArray.reduce((object, spendCategory) => {
    object[spendCategory.id] = { amount: 0.0 };
    return object;
  }, {});
}

export default function spendInputsReducer(state = initialState, action) {
  const { type, spendCategories, spendCategoryId, newAmount } = action;

  switch (type) {
    case FETCH_SPEND_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        bySpendCategoryId: buildIdMap(spendCategories)
      });
    }

    case actionTypes.UPDATE_SPEND_INPUT: {
      return Object.assign({}, state, {
        bySpendCategoryId: Object.assign({}, state.bySpendCategoryId, {
          [spendCategoryId]: Object.assign({}, state.bySpendCategoryId[spendCategoryId], {
            amount: newAmount
          })
        })
      });
    }

    default:
      return state;
  }
}
