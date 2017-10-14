import { createSelector } from 'reselect';

import getFilteredRewards from './getFilteredRewards';
import getFilteredSpendResults from './getFilteredSpendResults';

const getSpendCategoriesStore = state => state.spendCategoriesStore;

// Returns an object of the "best" (highest $ value) Reward IDs, keyed by SpendCategory IDs
// TODO - revisit & rewrite!!
const getFilteredBestRewardIds = createSelector(
  [getFilteredRewards, getFilteredSpendResults, getSpendCategoriesStore],
  (filteredRewards, filteredSpendResults, spendCategoriesStore) => {
    return filteredRewards.reduce((object, reward) => {
      const spendCategory = spendCategoriesStore.byId[reward.spendCategoryId];
      const dollarResultsForSpendCategory = Object.keys(filteredSpendResults)
        .filter(spendResultRewardId => {
          const spendResultReward = filteredRewards.find(reward => reward.id ===spendResultRewardId);
          return spendResultReward.spendCategoryId === spendCategory.id;
        })
        .map(spendResultRewardId => {
          const spendResult = filteredSpendResults[spendResultRewardId];
          return spendResult.dollarValue}
        );

      const maxDollarResult = Math.max(...dollarResultsForSpendCategory);

      if (maxDollarResult <= 0.0) { return object; }

      if (filteredSpendResults[reward.id].dollarValue >= maxDollarResult) {
        if (!object[spendCategory.id]) { object[spendCategory.id] = []; }

        object[spendCategory.id].push(reward.id);
      }

      return object;
    }, {});
  }
);

export default getFilteredBestRewardIds;
