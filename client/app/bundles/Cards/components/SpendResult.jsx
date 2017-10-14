import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/spend-results.scss';

class SpendResult extends React.Component {
  get className() {
    if (this.props.isBestForSpendCategory) {
      return `${styles.spendResultBest}`;
    } else {
      return `${styles.spendResult}`;
    }
  }

  get formattedDollarValue() {
    return this.props.dollarValue.toFixed(2);
  }

  render() {
    if (this.props.points <= 0) { return null; }

    return (
      <div className={this.className}>
        <strong>{this.props.points}</strong> points/miles,
        valued at ~
        $<strong>{this.formattedDollarValue}</strong> ({this.props.rewardCurrencyName})
      </div>
    );
  }
}

SpendResult.propTypes = {
  points: PropTypes.number.isRequired,
  dollarValue: PropTypes.number.isRequired,
  rewardCurrencyName: PropTypes.string.isRequired,
  isBestForSpendCategory: PropTypes.bool.isRequired
};

export default SpendResult;
