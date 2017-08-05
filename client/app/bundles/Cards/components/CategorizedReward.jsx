import React from 'react';
import PropTypes from 'prop-types';

import SpendResultContainer from '../containers/SpendResultContainer';

// TODO - this is effectively identical to UncategorizedReward, but their containers
// are different. Can/should two containers use the same component?

class CategorizedReward extends React.Component {
  render() {
    return (
      <div className="reward">
        <p>
          {this.props.percentage}% back on <em>{this.props.spendCategoryName}</em>:
        </p>

        <SpendResultContainer {...this.props} />
      </div>
    );
  }
}

CategorizedReward.propTypes = {
  percentage: PropTypes.number.isRequired,
  spendCategoryName: PropTypes.string.isRequired,
  rewardCurrency: PropTypes.object.isRequired
};

export default CategorizedReward;
