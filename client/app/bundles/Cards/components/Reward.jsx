import React from 'react';
import PropTypes from 'prop-types';

import SpendResultContainer from '../containers/SpendResultContainer';

class Reward extends React.Component {
  render() {
    return (
      <div className="reward">
        <p>
          {this.props.percentage}% back on <em>{this.props.spendCategory.name}</em>:
        </p>

        <SpendResultContainer
          rewardId={this.props.id}
          spendCategoryId={this.props.spendCategory.id}
          rewardCurrencyId={this.props.rewardCurrencyId}
        />
      </div>
    );
  }
}

Reward.propTypes = {
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  rewardCurrencyId: PropTypes.string.isRequired,
  spendCategory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Reward;
