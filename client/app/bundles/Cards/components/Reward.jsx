import React from 'react';
import PropTypes from 'prop-types';

class Reward extends React.Component {
  render() {
    return (
      <div className="reward">
        <p>Category: {this.props.spendCategory.name}</p>

        <p>% back: {this.props.percentage}</p>
      </div>
    );
  }
}

Reward.propTypes = {
  percentage: PropTypes.string.isRequired,
  spendCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
};

export default Reward;
