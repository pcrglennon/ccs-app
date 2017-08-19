import { connect } from 'react-redux';

import { updateCardProperty, updatePartialCardName } from '../actions/filtersActions';
import Filters from '../components/Filters';

function mapStateToProps(state) {
  return {
    cardProperties: state.filtersStore.cardProperties,
    partialCardName: state.filtersStore.partialCardName,
    banks: Object.values(state.banksStore.byId),
    networks: Object.values(state.networksStore.byId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCardProperty: (key, value) => {
      dispatch(updateCardProperty(key, value));
    },
    updatePartialCardName: (partialCardName) => {
      dispatch(updatePartialCardName(partialCardName));
    }
  };
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
