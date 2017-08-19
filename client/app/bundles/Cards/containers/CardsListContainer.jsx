import { connect } from 'react-redux';

import applyCardFilters from '../utils/applyCardFilters';
import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  // REFACTOR
  let filteredCards = applyCardFilters(state.filtersStore, Object.values(state.cardsStore.byId));

  if (state.portfoliosStore.selectedId.length && !state.portfoliosStore.managingCards) {
    const selectedPortfolio = state.portfoliosStore.byId[state.portfoliosStore.selectedId];
    filteredCards = filteredCards.filter(card => selectedPortfolio.cardIds.indexOf(card.id) > - 1);
  }

  return {
    cards: filteredCards
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
