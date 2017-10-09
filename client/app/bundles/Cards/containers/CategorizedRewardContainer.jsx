import { connect } from 'react-redux';

import { getFilteredRewards } from '../selectors/rewardsSelectors';
import CategorizedReward from '../components/CategorizedReward';

// TODO - selector-ize(?)
function isBestForSpendCategory(state, spendCategory, rewardCurrency, percentage) {
  const filteredRewardResultsForSpendCategory = getFilteredRewards(state)
    .filter(reward => reward.spendCategoryId === spendCategory.id)
    .map(reward => {
      const rewardCurrency = state.rewardCurrenciesStore.byId[reward.rewardCurrencyId];
      return reward.percentage * rewardCurrency.valueCents;
    });

  const maxRewardResultForSpendCategory = Math.max(...filteredRewardResultsForSpendCategory);

  return (percentage * rewardCurrency.valueCents) >= maxRewardResultForSpendCategory;
}

function mapStateToProps(state, props) {
  const spendCategory = state.spendCategoriesStore.byId[props.spendCategoryId];
  const rewardCurrency = state.rewardCurrenciesStore.byId[props.rewardCurrencyId];

  return {
    spendCategoryName: spendCategory.name,
    spendCategoryIds: [spendCategory.id],
    rewardCurrency: rewardCurrency,
    isBestForSpendCategory: isBestForSpendCategory(state, spendCategory, rewardCurrency, props.percentage)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CategorizedRewardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorizedReward);

export default CategorizedRewardContainer;
