import { connect } from 'react-redux';

import Reward from '../components/Reward';

function mapStateToProps(state, props) {
  return {
    spendCategory: state.spendCategoriesStore.byId[props.spend_category_id]
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
