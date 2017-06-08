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

        <SpendResultContainer {...this.props} />
      </div>
    );
  }
}

Reward.propTypes = {
  percentage: PropTypes.string.isRequired,
  spendCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Reward;
