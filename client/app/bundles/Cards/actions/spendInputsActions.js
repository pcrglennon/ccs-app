import * as actionTypes from '../constants/spendInputsConstants';

export function updateSpendInput(spendCategoryId, newAmount) {
  return {
    type: actionTypes.UPDATE_SPEND_INPUT,
    spendCategoryId: spendCategoryId,
    newAmount: newAmount
  };
}
