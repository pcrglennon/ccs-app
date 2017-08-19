import { connect } from 'react-redux';

import { updateCardProperty, updatePartialCardName, updateSelectedCardsOnly } from '../actions/filtersActions';
import Filters from '../components/Filters';

function mapStateToProps(state) {
  return {
    cardProperties: state.filtersStore.cardProperties,
    partialCardName: state.filtersStore.partialCardName,
    selectedCardsOnly: state.filtersStore.selectedCardsOnly,
    banks: Object.values(state.banksStore.byId),
    networks: Object.values(state.networksStore.byId)
  };
}

// TODO - update this structure to match structure of nested cardProperties
function mapDispatchToProps(dispatch) {
  return {
    updateCardProperty: (key, value) => {
      dispatch(updateCardProperty(key, value));
    },
    updatePartialCardName: (partialCardName) => {
      dispatch(updatePartialCardName(partialCardName));
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
