import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/cards.scss';

import CategorizedRewardContainer from '../containers/CategorizedRewardContainer';
import UncategorizedRewardContainer from '../containers/UncategorizedRewardContainer';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectToggleClick = this.onSelectToggleClick.bind(this);
  }

  // TODO - should probably be moved to own component!
  selectToggleClassName() {
    if (this.props.isSelected) {
      return `${styles.selectToggleSelected}`;
    } else {
      return `${styles.selectToggleNotSelected}`;
    }
  }

  // TODO - should probably be moved to own component!
  onSelectToggleClick(_event) {
    if (this.props.isSelected) {
      this.props.deselect();
    } else {
      this.props.select();
    }
  }

  // TODO - should probably be moved to own component!
  renderSelectToggle() {
    return (
      <div className={styles.selectToggleContainer}>
        <div
          onClick={this.onSelectToggleClick}
          className={this.selectToggleClassName()}
        />
      </div>
    );
  }

  renderBankName() {
    if (!this.props.bank) { return null; }

    return (
      <p>Bank: <strong>{this.props.bank.name}</strong></p>
    );
  }

  renderNetworkName() {
    return (
      <p>Network: <strong>{this.props.network.name}</strong></p>
    );
  }

  renderCategorizedRewards() {
    return this.props.categorizedRewards.map((reward) => {
      return (
        <CategorizedRewardContainer
          key={reward.id}
          {...reward}
        />
      );
    });
  }

  renderUncategorizedReward() {
    if (!this.props.uncategorizedReward) { return null; }

    return (
      <UncategorizedRewardContainer
        key={this.props.uncategorizedReward.id}
        excludedSpendCategoryIds={this.props.categorizedRewards.map(reward => reward.spendCategoryId)}
        {...this.props.uncategorizedReward}
      />
    );
  }

  renderRewards() {
    if (this.props.categorizedRewards.length === 0 && !this.props.uncategorizedReward) {
      return (<p>None!</p>);
    }

    return (
      <div className="rewards">
        {this.renderCategorizedRewards()}

        {this.renderUncategorizedReward()}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.card}>
        {this.renderSelectToggle()}

        <h3 className={styles.name}>{this.props.name}</h3>

        {this.renderBankName()}

        {this.renderNetworkName()}

        <p className={styles.annualFee}>
          Annual Fee: <strong>${this.props.annualFee}</strong>
        </p>

        {this.renderRewards()}
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  bank: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  network: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  categorizedRewards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired,
  uncategorizedReward: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  select: PropTypes.func.isRequired
};

export default Card;
