import { connect } from 'react-redux';

import { updateSpendInput } from '../actions/spendInputsActions';
import SpendInput from '../components/SpendInput';

function mapStateToProps(state, props) {
  return {
    amount: state.spendInputsStore.bySpendCategoryId[props.spendCategoryId].amount
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    updateAmount: (newAmount) => {
      dispatch(updateSpendInput(props.spendCategoryId, newAmount));
    }
  };
}

const SpendInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendInput);

export default SpendInputContainer;
