import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="card">
        <p>Name: {this.props.name}</p>

        <div className="rewards" style={{ paddingLeft: '20px' }}>
          <h4>Rewards</h4>

          {this.renderRewards()}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rewards: PropTypes.arrayOf(PropTypes.shape({
    spend_category_id: PropTypes.number.isRequired,
    reward_currency_id: PropTypes.number.isRequired,
    percentage: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

export default Card;
