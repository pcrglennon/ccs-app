import { connect } from 'react-redux';

import Card from '../components/Card';
import { addCardToPortfolio, removeCardFromPortfolio } from '../actions/cardsPortfoliosActions';

// TODO: move this logic into getFilteredCards, so selectors which make use
// of that selector can account for portfolios as well.
// As it is, there is some confusing behavior when a Portfolio is selected,
// the "best in category" highlighting may not work as intended
function selectedCardsPortfolios(state) {
  if (!state.portfoliosStore.selectedId) { return []; }

  const selectedPortfolio = state.portfoliosStore.byId[state.portfoliosStore.selectedId];
  return Object.values(state.cardsPortfoliosStore.byId)
    .filter(cardsPortfolio => cardsPortfolio.portfolioId === selectedPortfolio.id);
}

function mapStateToProps(state, props) {
  const cardsPortfolio = selectedCardsPortfolios(state)
    .find(cardsPortfolio => cardsPortfolio.cardId === props.id);

  return {
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    rewards: Object.values(state.rewardsStore.byId).filter(reward => reward.cardId === props.id),
    selectedPortfolioId: state.portfoliosStore.selectedId,
    portfolioManagingCards: state.portfoliosStore.managingCards,
    cardsPortfolio: cardsPortfolio,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    addCardToPortfolio: (portfolioId) => {
      dispatch(addCardToPortfolio(props.id, portfolioId));
    },
    removeCardFromPortfolio: (cardsPortfolioId) => {
      dispatch(removeCardFromPortfolio(cardsPortfolioId));
    }
  };
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
