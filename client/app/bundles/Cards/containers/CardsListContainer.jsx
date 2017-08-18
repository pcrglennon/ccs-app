import { connect } from 'react-redux';

import applyCardFilters from '../utils/applyCardFilters';
import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  return {
    cards: applyCardFilters(state.filtersStore, Object.values(state.cardsStore.byId), state.cardsStore.selectedIds)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsList);

export default CardsListContainer;
