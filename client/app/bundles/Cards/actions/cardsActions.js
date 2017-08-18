import * as actionTypes from '../constants/cardsConstants';

export function selectCard(id) {
  return {
    type: actionTypes.SELECT_CARD,
    id: id
  };
}

export function deselectCard(id) {
  return {
    type: actionTypes.DESELECT_CARD,
    id: id
  };
}
