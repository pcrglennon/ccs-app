import { connect } from 'react-redux';

import CategorizedReward from '../components/CategorizedReward';

function mapStateToProps(state, props) {
  const spendCategory = state.spendCategoriesStore.byId[props.spendCategoryId];

  return {
    spendCategoryName: spendCategory.name,
    spendCategoryIds: [spendCategory.id],
    rewardCurrency: state.rewardCurrenciesStore.byId[props.rewardCurrencyId]
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
