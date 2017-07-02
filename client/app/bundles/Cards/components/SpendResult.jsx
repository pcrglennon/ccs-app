import React from 'react';
import PropTypes from 'prop-types';

class SpendResult extends React.Component {
  convertedPercentage() {
    return this.props.percentage / 100.0;
  }

  valuePoints() {
    return this.props.amount * this.props.percentage;
  }

  valueDollars() {
    return (this.props.amount * this.convertedPercentage() * this.props.rewardCurrency.valueCents).toFixed(2);
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
  percentage: PropTypes.number.isRequired,
  rewardCurrency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    valueCents: PropTypes.number.isRequired
  }).isRequired
};

export default SpendResult;
