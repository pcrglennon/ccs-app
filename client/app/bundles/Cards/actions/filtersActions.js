import * as actionTypes from '../constants/filtersConstants';

export function updateBankId(bankId) {
  return {
    type: actionTypes.FILTERS_UPDATE_BANK_ID,
    bankId: bankId
  };
}

export function updateNetworkId(networkId) {
  return {
    type: actionTypes.FILTERS_UPDATE_NETWORK_ID,
    networkId: networkId
  };
}

export function updateSelectedCardsOnly(selectedCardsOnly) {
  return {
    type: actionTypes.FILTERS_UPDATE_SELECTED_CARDS_ONLY,
    selectedCardsOnly: selectedCardsOnly
  };
}
