import * as actionTypes from '../constants/cardsConstants';

const initialState = {
  byId: {}
};

function buildIdMapFromCards(cardsArray) {
  const rewardsArray = cardsArray.reduce((array, card) => {
    return array.concat(card.rewards);
  }, []);

  return rewardsArray.reduce((object, reward) => {
    object[reward.id] = reward;
    return object;
  }, {});
}

export default function rewardsReducer(state = initialState, action) {
  const { type, cards, error } = action;

  switch (type) {
    case actionTypes.FETCH_CARDS_SUCCESS: {
      return Object.assign({}, state, {
        byId: buildIdMapFromCards(cards)
      });
    }

    default:
      return state;
  }
}
