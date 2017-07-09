import { connect } from 'react-redux';

import Card from '../components/Card';

function mapStateToProps(state, props) {
  return {
    bank: Object.values(state.banksStore.byId).find((bank) => bank.id === props.bankId),
    network: Object.values(state.networksStore.byId).find((network) => network.id === props.networkId),
    rewards: Object.values(state.rewardsStore.byId).filter((reward) => reward.cardId === props.id)
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
