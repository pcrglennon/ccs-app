import React from 'react';
import { connect } from 'react-redux';

import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class CardsListContainer extends React.Component {
  render() {
    const { cards } = this.props;

    return (
      <CardsList {...{ cards }}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer);
