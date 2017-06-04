import * as actionTypes from '../constants/cardsConstants';

const initialState = {
  byId: [],
  isFetching: false,
  fetchErrorMessage: ''
};

function buildIdMap(cardsArray) {
  return cardsArray.reduce((object, card) => {
    object[card.id] = card;
    return object;
  }, {});
}

export default function cardsReducer(state = initialState, action) {
  const { type, cards, error } = action;

  switch (type) {
    case actionTypes.FETCH_CARDS_SUCCESS: {
      return Object.assign({}, state, {
        byId: buildIdMap(cards),
        fetchErrorMessage: '',
        isFetching: false
      });
    }

    case actionTypes.FETCH_CARDS_ERROR: {
      return Object.assign({}, state, {
        fetchErrorMessage: error,
        isFetching: false
      });
    }

    case actionTypes.FETCH_CARDS_BEGIN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }

    default:
      return state;
  }
}
