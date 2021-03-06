import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/cards.scss';

import RewardContainer from '../containers/RewardContainer';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectToggleClick = this.onSelectToggleClick.bind(this);
  }

  // TODO - should probably be moved to own component!
  // And refactored
  selectToggleClassName() {
    if (this.inSelectedPortfolio && !this.props.portfolioManagingCards) {
      return `${styles.selectToggleSelectedLocked}`;
    } else if (this.inSelectedPortfolio && this.props.portfolioManagingCards) {
      return `${styles.selectToggleSelected}`;
    } else {
      return `${styles.selectToggleNotSelected}`;
    }
  }

  // TODO - should probably be moved to own component!
  onSelectToggleClick(_event) {
    // Only allow toggling when Portfolio is in "managing cards" state
    if (this.props.selectedPortfolioId.length === 0 || !this.props.portfolioManagingCards) { return; }

    if (this.inSelectedPortfolio) {
      this.props.removeCardFromPortfolio(this.props.cardsPortfolio.id);
    } else {
      this.props.addCardToPortfolio(this.props.selectedPortfolioId);
    }
  }

  get inSelectedPortfolio() {
    return !!this.props.cardsPortfolio;
  }

  // TODO - should probably be moved to own component!
  renderSelectToggle() {
    // Only display toggle when there is a selected Portfolio
    if (this.props.selectedPortfolioId.length === 0) { return null; }

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

  renderReward(reward) {
    return (
      <RewardContainer
        key={reward.id}
        {...reward}
      />
    );
  }

  renderRewards() {
    if (this.props.rewards.length === 0) {
      return (<p>None!</p>);
    }

    return (
      <div className="rewards">
        {this.props.rewards.map((reward) => this.renderReward(reward))}
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
  bank: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  network: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  rewards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectedPortfolioId: PropTypes.string.isRequired,
  portfolioManagingCards: PropTypes.bool.isRequired,
  cardsPortfolio: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  addCardToPortfolio: PropTypes.func.isRequired,
  removeCardFromPortfolio: PropTypes.func.isRequired
};

export default Card;
