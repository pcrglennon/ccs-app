import { createSelector } from 'reselect';

import { getFilteredCards } from './cardsSelectors';

const getRewards = state => Object.values(state.rewardsStore.byId);

export const getFilteredRewards = createSelector(
  [getFilteredCards, getRewards],
  (filteredCards, rewards) => {
    const filteredCardIds = filteredCards.map(card => card.id);

    return rewards.filter(reward => filteredCardIds.indexOf(reward.cardId) > -1);
  }
);
