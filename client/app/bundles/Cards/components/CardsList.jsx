import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../containers/CardContainer';

class CardsList extends React.Component {
  renderCards() {
    return this.props.cards.map((card) => {
      return (
        <CardContainer
          key={card.id}
          {...card}
        />
      );
    });
  }

  render() {
    return (
      <div className="cards-list">
        <h3>CardsList</h3>

        {this.renderCards()}
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default CardsList;
