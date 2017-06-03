import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardsList extends React.Component {
  renderFetchingMessage() {
    if (this.props.isFetching) {
      return (
        <p>Fetching Cards...</p>
      );
    } else { return null; }
  }

  renderFetchErrorMessage() {
    if (this.props.fetchErrorMessage) {
      return (
        <p>Error: {this.props.fetchErrorMessage}</p>
      );
    } else { return null; }
  }

  renderCards() {
    return this.props.cards.map((card) => {
      return (
        <Card
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
        {this.renderFetchingMessage()}
        {this.renderFetchErrorMessage()}
        {this.renderCards()}
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchErrorMessage: PropTypes.string.isRequired
};

export default CardsList;
