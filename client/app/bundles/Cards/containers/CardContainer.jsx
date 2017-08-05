import { connect } from 'react-redux';

import Card from '../components/Card';
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

function mapStateToProps(state, props) {
  const { categorizedRewards, uncategorizedReward } = partitionRewards(state, props.id);

  return {
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    categorizedRewards: categorizedRewards,
    uncategorizedReward: uncategorizedReward
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
