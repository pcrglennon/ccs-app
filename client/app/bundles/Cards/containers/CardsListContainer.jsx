import { connect } from 'react-redux';

import applyFilters from '../utils/applyFilters';
import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  return {
    cards: applyFilters(Object.values(state.cardsStore.byId), state.filtersStore)
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
