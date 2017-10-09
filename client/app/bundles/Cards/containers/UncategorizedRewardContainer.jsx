import { connect } from 'react-redux';

import UncategorizedReward from '../components/UncategorizedReward';

function mapStateToProps(state, props) {
  const spendCategory = state.spendCategoriesStore.byId[props.spendCategoryId];
  const spendCategoryIds = Object.values(state.spendCategoriesStore.byId)
    .filter(spendCategory => props.excludedSpendCategoryIds.indexOf(spendCategory.id) === -1)
    .map(spendCategory => spendCategory.id)

  // TODO - figure out how to (sanely) do isBestForSpendCategory for uncategorized
  return {
    spendCategoryName: spendCategory.name,
    spendCategoryIds: spendCategoryIds,
    rewardCurrency: state.rewardCurrenciesStore.byId[props.rewardCurrencyId],
    isBestForSpendCategory: false
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const UncategorizedRewardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UncategorizedReward);

export default UncategorizedRewardContainer;
