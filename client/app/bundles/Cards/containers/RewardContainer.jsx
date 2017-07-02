import { connect } from 'react-redux';

import Reward from '../components/Reward';

function mapStateToProps(state, props) {
  return {
    spendCategory: state.spendCategoriesStore.byId[props.spendCategoryId],
    rewardCurrency: state.rewardCurrenciesStore.byId[props.rewardCurrencyId]
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const RewardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reward);

export default RewardContainer;
