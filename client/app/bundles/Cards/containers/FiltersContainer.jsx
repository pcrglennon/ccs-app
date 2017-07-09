import { connect } from 'react-redux';

import { updateBankId, updateNetworkId } from '../actions/filtersActions';
import Filters from '../components/Filters';

function mapStateToProps(state) {
  return {
    bankId: state.filtersStore.bankId,
    networkId: state.filtersStore.networkId,
    banks: Object.values(state.banksStore.byId),
    networks: Object.values(state.networksStore.byId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateBankId: (bankId) => {
      dispatch(updateBankId(bankId));
    },
    updateNetworkId: (networkId) => {
      dispatch(updateNetworkId(networkId));
    }
  };
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
