import { connect } from 'react-redux';

import getFilteredCards from '../selectors/getFilteredCards';
import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  let filteredCards = getFilteredCards(state);

  // TODO - selector-ize!
  if (state.portfoliosStore.selectedId.length && !state.portfoliosStore.managingCards) {
    const selectedPortfolio = state.portfoliosStore.byId[state.portfoliosStore.selectedId];
    const portfolioCardIds = Object.values(state.cardsPortfoliosStore.byId)
      .filter(cardsPortfolio => cardsPortfolio.portfolioId === selectedPortfolio.id)
      .map(cardsPortfolio => cardsPortfolio.cardId);

    filteredCards = filteredCards.filter(card => portfolioCardIds.indexOf(card.id) > -1);
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
