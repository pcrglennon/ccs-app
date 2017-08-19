import { combineReducers } from 'redux';

import * as actionTypes from '../constants/filtersConstants';

const cardPropertiesInitialState = {
  bankId: '',
  networkId: ''
};

function cardProperties(state = cardPropertiesInitialState, action) {
  const { type, key, value } = action;

  switch (type) {
    case actionTypes.FILTERS_UPDATE_CARD_PROPERTY: {
      return Object.assign({}, state, {
        [key]: value
      });
    }
    default:
      return state;
  }
}

function partialCardName(state = '', action) {
  const { type, partialCardName } = action;

  switch (type) {
    case actionTypes.FILTERS_UPDATE_PARTIAL_CARD_NAME:
      return partialCardName;
    default:
      return state;
  }
}

export default combineReducers({
  cardProperties: cardProperties,
  partialCardName: partialCardName
});
