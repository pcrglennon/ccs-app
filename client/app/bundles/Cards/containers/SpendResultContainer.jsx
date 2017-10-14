import { connect } from 'react-redux';

import getFilteredBestRewardIds from '../selectors/getFilteredBestRewardIds';
import getFilteredSpendResults from '../selectors/getFilteredSpendResults';
import SpendResult from '../components/SpendResult';

function isBestForSpendCategory(state, props) {
  const bestRewardIdsForSpendCategory = getFilteredBestRewardIds(state)[props.spendCategoryId];

  if (bestRewardIdsForSpendCategory) {
    return bestRewardIdsForSpendCategory.indexOf(props.rewardId) > -1;
  } else {
    return false;
  }
}

function mapStateToProps(state, props) {
  const rewardCurrency = state.rewardCurrenciesStore.byId[props.rewardCurrencyId];
  const { points, dollarValue } = getFilteredSpendResults(state)[props.rewardId];

  return {
    points: points,
    dollarValue: dollarValue,
    rewardCurrencyName: rewardCurrency.name,
    isBestForSpendCategory: isBestForSpendCategory(state, props)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const SpendResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendResult);

export default SpendResultContainer;
