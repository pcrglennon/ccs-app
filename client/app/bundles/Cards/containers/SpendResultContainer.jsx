import { connect } from 'react-redux';

import SpendResult from '../components/SpendResult';

function mapStateToProps(state, props) {
  const spendInputs = props.spendCategoryIds.map(spendCategoryId => {
    return state.spendInputsStore.bySpendCategoryId[spendCategoryId];
  });
  const amount = spendInputs.reduce((sum, spendInput) => {
    return sum + spendInput.amount;
  }, 0.0);

  return {
    amount: amount
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
