import { connect } from 'react-redux';

import SpendResult from '../components/SpendResult';

function mapStateToProps(state, props) {
  return {
    amount: state.spendInputsStore.bySpendCategoryId[props.spendCategory.id].amount
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
