import { connect } from 'react-redux';

import Card from '../components/Card';
import { addCardToPortfolio, removeCardFromPortfolio } from '../actions/portfoliosActions';
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

function isCardInSelectedPortfolio(state, cardId) {
  if (!state.portfoliosStore.selectedId) { return false; }

  const selectedPortfolio = state.portfoliosStore.byId[state.portfoliosStore.selectedId];
  return selectedPortfolio.cardIds.indexOf(cardId) > -1;
}

function mapStateToProps(state, props) {
  const { categorizedRewards, uncategorizedReward } = partitionRewards(state, props.id);
  const inSelectedPortfolio = isCardInSelectedPortfolio(state, props.id);

  return {
    inSelectedPortfolio: inSelectedPortfolio,
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    categorizedRewards: categorizedRewards,
    uncategorizedReward: uncategorizedReward,
    selectedPortfolioId: state.portfoliosStore.selectedId,
    portfolioManagingCards: state.portfoliosStore.managingCards
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    addCardToPortfolio: (portfolioId) => {
      dispatch(addCardToPortfolio(portfolioId, props.id));
    },
    removeCardFromPortfolio: (portfolioId) => {
      dispatch(removeCardFromPortfolio(portfolioId, props.id));
    }
  };
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
