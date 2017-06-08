import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/cardsConstants';

function fetchCardsBegin() {
  return {
    type: actionTypes.FETCH_CARDS_BEGIN
  };
}

function fetchCardsSuccess(cards) {
  return {
    type: actionTypes.FETCH_CARDS_SUCCESS,
    cards: cards
  };
}

function fetchCardsError(error) {
  return {
    type: actionTypes.FETCH_CARDS_ERROR,
    error: error
  };
}

export function fetchCards() {
  return (dispatch) => {
    dispatch(fetchCardsBegin());

    const request = new Request('/cards.json', {
      credentials: 'same-origin'
    });

    return fetch(request)
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          dispatch(fetchCardsError(json.error));
        } else {
          dispatch(fetchCardsSuccess(json));
        }
      });
  };
}
