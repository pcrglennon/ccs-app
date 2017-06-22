import React from 'react';
import PropTypes from 'prop-types';

class SpendResult extends React.Component {
  convertedPercentage() {
    return parseFloat(this.props.percentage) / 100.0;
  }

  convertedCentsPerPoint() {
    return parseFloat(this.props.rewardCurrency.value_cents);
  }

  valuePoints() {
    return this.props.amount * parseFloat(this.props.percentage);
  }

  valueDollars() {
    return (this.props.amount * this.convertedPercentage() * this.convertedCentsPerPoint()).toFixed(2);
  }

  render() {
    if (this.props.amount) {
      return (
        <div className="spend-result">
          <strong>{this.valuePoints()}</strong> points/miles,
          valued at ~
          $<strong>{this.valueDollars()}</strong> ({this.props.rewardCurrency.name})
        </div>
      );
    } else { return null; }
  }
}

SpendResult.propTypes = {
  amount: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
  rewardCurrency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value_cents: PropTypes.string.isRequired
  }).isRequired
};

export default SpendResult;
