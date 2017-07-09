import { combineReducers } from 'redux';

import * as actionTypes from '../constants/filtersConstants';

function bankId(state = '', action) {
  const { type, bankId } = action;

  switch (type) {
    case actionTypes.FILTERS_UPDATE_BANK_ID:
      return bankId;
    default:
      return state;
  }
}

function networkId(state = '', action) {
  const { type, networkId } = action;

  switch (type) {
    case actionTypes.FILTERS_UPDATE_NETWORK_ID:
      return networkId;
    default:
      return state;
  }
}

export default combineReducers({
  bankId: bankId,
  networkId: networkId
});
