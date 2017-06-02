import React from 'react';
import { connect } from 'react-redux';

import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  return {
    cards: state.cardsStore.cards,
    isFetching: state.cardsStore.isFetching
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
