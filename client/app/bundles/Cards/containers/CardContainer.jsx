import { connect } from 'react-redux';

import Card from '../components/Card';

function mapStateToProps(state, props) {
  return {
    rewards: Object.values(state.rewardsStore.byId).filter((reward) => reward.card_id === props.id)
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
