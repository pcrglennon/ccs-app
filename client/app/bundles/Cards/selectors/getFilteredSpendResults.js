import { createSelector } from 'reselect';

import { UNCATEGORIZED_SPEND_NAME } from '../constants/spendCategoriesConstants';
import getFilteredRewards from './getFilteredRewards';

// TODO - remove debug, cardId, & spendCategoryName
function spendResult(spendInputAmount, percentage, rewardCurrency, cardId, spendCategoryName) {
  const points = spendInputAmount * percentage;
  const dollarValue = ((points * rewardCurrency.valueCents) / 100.0);

  return {
    debug: `${spendCategoryName} reward on card ${cardId}`,
    points: points,
    dollarValue: dollarValue
  };
}

const getSpendInputsStore = state => state.spendInputsStore;
const getSpendCategoriesStore = state => state.spendCategoriesStore;
const getRewardCurrenciesStore = state => state.rewardCurrenciesStore;

// Returns an object of spend results (both points & $ values, keyed by Reward IDs)
const getFilteredSpendResults = createSelector(
  [getFilteredRewards, getSpendInputsStore, getSpendCategoriesStore, getRewardCurrenciesStore],
  (filteredRewards, spendInputsStore, spendCategoriesStore, rewardCurrenciesStore) => {
    return filteredRewards.reduce((object, reward) => {
      const spendCategory = spendCategoriesStore.byId[reward.spendCategoryId];
      const rewardCurrency = rewardCurrenciesStore.byId[reward.rewardCurrencyId];

      // TODO - refactor, & remove comments!
      if (spendCategory.name === UNCATEGORIZED_SPEND_NAME) {
        // collect all category-specific bonuses for card (to be excluded)
        const bonusSpendCategoryIdsForCard = filteredRewards
          .filter(otherReward => otherReward.cardId === reward.cardId)
          .map(otherReward => otherReward.spendCategoryId);

        // collect amounts from all spend inputs which *don't* have category-specific
        // bonuses for card, *and* the non-bonus spend input
        const nonBonusSpendInputAmounts = Object.keys(spendInputsStore.bySpendCategoryId)
          .filter(spendCategoryId => {
            return bonusSpendCategoryIdsForCard.indexOf(spendCategoryId) === -1;
          })
          .concat([spendCategory.id])
          .map(spendCategoryId => spendInputsStore.bySpendCategoryId[spendCategoryId].amount);

        // calculate total amount from above amounts
        const spendInputAmount = nonBonusSpendInputAmounts.reduce((sum, spendInputAmount) => {
          return sum += spendInputAmount;
        }, 0.0);

        object[reward.id] = spendResult(spendInputAmount, reward.percentage, rewardCurrency, reward.cardId, spendCategory.name);
      } else {
        const spendInputAmount = spendInputsStore.bySpendCategoryId[spendCategory.id].amount;
        object[reward.id] = spendResult(spendInputAmount, reward.percentage, rewardCurrency, reward.cardId, spendCategory.name);
      }

      return object;
    }, {});
  }
);

export default getFilteredSpendResults;
