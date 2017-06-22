import * as actionTypes from '../constants/cardsConstants';

const initialState = {
  byId: {}
};

// Ugh
// Can be greatly cleaned up after transition to GraphQL
function buildIdMapFromCards(cardsArray) {
  const rewardsArray = cardsArray.reduce((array, card) => {
    return array.concat(card.rewards);
  }, []);

  const rewardCurrenciesArray = rewardsArray.reduce((array, reward) => {
    return array.concat([reward.reward_currency]);
  }, []);

  return rewardCurrenciesArray.reduce((object, rewardCurrency) => {
    object[rewardCurrency.id] = rewardCurrency;
    return object;
  }, {});
}

export default function rewardCurrenciesReducer(state = initialState, action) {
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
