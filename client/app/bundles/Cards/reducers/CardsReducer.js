import * as actionTypes from '../constants/cardsConstants';

const initialState = {
  cards: [],
  isFetching: false,
  fetchErrorMessage: ''
};

export default function cardsReducer(state = initialState, action) {
  const { type, cards, error } = action;

  switch (type) {
    case actionTypes.FETCH_CARDS_SUCCESS: {
      return Object.assign({}, state, {
        cards: cards,
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
