import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/cards.scss';

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
      <div className={styles.cardsList}>
        {this.renderCards()}
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default CardsList;
