import React from 'react';
import PropTypes from 'prop-types';

class SpendResult extends React.Component {
  result() {
    const convertedPercentage = parseFloat(this.props.percentage) / 100.0;
    return (this.props.amount * convertedPercentage).toFixed(2);
  }

  render() {
    if (this.props.amount) {
      return (
        <div className="spend-result">
          $<strong>{this.result()}</strong>
        </div>
      );
    } else { return null; }
  }
}

SpendResult.propTypes = {
  amount: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired
};

export default SpendResult;
