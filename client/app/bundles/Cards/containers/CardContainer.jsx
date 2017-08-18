import { connect } from 'react-redux';

import Card from '../components/Card';
import { selectCard, deselectCard } from '../actions/cardsActions';
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
    isSelected: state.cardsStore.selectedIds.indexOf(props.id) > - 1,
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    categorizedRewards: categorizedRewards,
    uncategorizedReward: uncategorizedReward
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    select: () => {
      dispatch(selectCard(props.id));
    },
    deselect: () => {
      dispatch(deselectCard(props.id));
    }
  };
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
