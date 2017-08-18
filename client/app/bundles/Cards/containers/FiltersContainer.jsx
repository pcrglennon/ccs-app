import { connect } from 'react-redux';

import { updateBankId, updateNetworkId, updateSelectedCardsOnly } from '../actions/filtersActions';
import Filters from '../components/Filters';

function mapStateToProps(state) {
  return {
    cardProperties: state.filtersStore.cardProperties,
    selectedCardsOnly: state.filtersStore.selectedCardsOnly,
    banks: Object.values(state.banksStore.byId),
    networks: Object.values(state.networksStore.byId)
  };
}

// TODO - update this structure to match structure of nested cardProperties
function mapDispatchToProps(dispatch) {
  return {
    updateBankId: (bankId) => {
      dispatch(updateBankId(bankId));
    },
    updateNetworkId: (networkId) => {
      dispatch(updateNetworkId(networkId));
    },
    updateSelectedCardsOnly: (selectedCardsOnly) => {
      dispatch(updateSelectedCardsOnly(selectedCardsOnly));
    }
  };
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
