import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/cards.scss';

import RewardContainer from '../containers/RewardContainer';

class Card extends React.Component {
  renderRewards() {
    if (this.props.rewards.length) {
      return this.props.rewards.map((reward) => {
        return (
          <RewardContainer
            key={reward.id}
            {...reward}
          />
        );
      });
    } else {
      return (
        <p>None :(</p>
      );
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <h3 className={styles.name}>{this.props.name}</h3>

        <p className={styles.annualFee}>
          Annual Fee: <strong>${this.props.annualFee}</strong>
        </p>

        <h4>Rewards</h4>

        <div className="rewards">
          {this.renderRewards()}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  rewards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default Card;
