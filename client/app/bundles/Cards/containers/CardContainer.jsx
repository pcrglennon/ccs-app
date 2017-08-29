import { connect } from 'react-redux';

import Card from '../components/Card';
import { addCardToPortfolio, removeCardFromPortfolio } from '../actions/cardsPortfoliosActions';
import { UNCATEGORIZED_SPEND_NAME } from '../constants/spendCategoriesConstants';

// REFACTOR
function partitionRewards(state, cardId) {
  const rewards = Object.values(state.rewardsStore.byId).filter(reward => reward.cardId === cardId);

  const categorizedRewards = rewards.filter(reward => {
    return state.spendCategoriesStore.byId[reward.spendCategoryId].name !== UNCATEGORIZED_SPEND_NAME;
  });
  const uncategorizedReward = rewards.find(reward => {
    return state.spendCategoriesStore.byId[reward.spendCategoryId].name === UNCATEGORIZED_SPEND_NAME;
  });

  return {
    categorizedRewards: categorizedRewards,
    uncategorizedReward: uncategorizedReward
  };
}

function selectedCardsPortfolios(state) {
  if (!state.portfoliosStore.selectedId) { return []; }

  // Ick, figure out how to refactor (Selectors?)
  const selectedPortfolio = state.portfoliosStore.byId[state.portfoliosStore.selectedId];
  return Object.values(state.cardsPortfoliosStore.byId)
    .filter(cardsPortfolio => cardsPortfolio.portfolioId === selectedPortfolio.id);
}

function mapStateToProps(state, props) {
  const { categorizedRewards, uncategorizedReward } = partitionRewards(state, props.id);
  // TODO - this is weird & unintuitive, rethink
  const cardsPortfolio = selectedCardsPortfolios(state)
    .find(cardsPortfolio => cardsPortfolio.cardId === props.id);

  return {
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    categorizedRewards: categorizedRewards,
    uncategorizedReward: uncategorizedReward,
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
