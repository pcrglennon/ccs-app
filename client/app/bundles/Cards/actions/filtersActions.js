import * as actionTypes from '../constants/filtersConstants';

export function updateCardProperty(key, value) {
  return {
    type: actionTypes.FILTERS_UPDATE_CARD_PROPERTY,
    key: key,
    value: value
  };
}

export function updatePartialCardName(partialCardName) {
  return {
    type: actionTypes.FILTERS_UPDATE_PARTIAL_CARD_NAME,
    partialCardName: partialCardName
  };
}

export function updateSelectedCardsOnly(selectedCardsOnly) {
  return {
    type: actionTypes.FILTERS_UPDATE_SELECTED_CARDS_ONLY,
    selectedCardsOnly: selectedCardsOnly
  };
}
