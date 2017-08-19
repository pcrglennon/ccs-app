import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/portfolio-manager.scss';

class PortfolioManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPortfolioName: ''
    };

    this.handleSelectedPortfolioIdChange = this.handleSelectedPortfolioIdChange.bind(this);
    this.handleNewPortfolioNameChange = this.handleNewPortfolioNameChange.bind(this);
    this.handleManagingCardsToggleClick = this.handleManagingCardsToggleClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleSelectedPortfolioIdChange(event) {
    this.props.setSelectedPortfolioId(event.target.value);
  }

  handleNewPortfolioNameChange(event) {
    this.setState({ newPortfolioName: event.target.value });
  }

  handleManagingCardsToggleClick(event) {
    if (!this.isSelectedPortfolioIdValid) { return; }

    this.props.toggleManagingPortfolioCards(!this.props.managingCards);
  }

  handleCreateClick(event) {
    if (this.isNewPortfolioNameValid) {
      this.props.createPortfolio(this.state.newPortfolioName.trim());
      this.setState({ newPortfolioName: '' });
    }
  }

  get isSelectedPortfolioIdValid() {
    return this.props.selectedPortfolioId.length > 0;
  }

  get isNewPortfolioNameValid() {
    return this.state.newPortfolioName.length > 0;
  }

  get managingCardsToggleText() {
    if (this.props.managingCards) {
      return 'Done Managing';
    } else {
      return 'Manage Cards'
    }
  }

  renderOptions(objects) {
    return objects.map((object) => {
      return (
        <option key={object.id} value={object.id}>{object.name}</option>
      );
    });
  }

  render() {
    return (
      <div className={styles.portfolioManager}>
        <div className={styles.selection}>
          <label>Select a Portfolio:</label>

          <select
            value={this.props.selectedPortfolioId}
            onChange={this.handleSelectedPortfolioIdChange}
          >
            <option value=''>--None--</option>

            {this.renderOptions(this.props.portfolios)}
          </select>
        </div>

        <button
          onClick={this.handleManagingCardsToggleClick}
          disabled={!this.isSelectedPortfolioIdValid}
          className={styles.button}
        >
          {this.managingCardsToggleText}
        </button>

        <div className={styles.create}>
          <div>
            <label>Create a New Portfolio:</label>

            <input
              type="text"
              onChange={this.handleNewPortfolioNameChange}
              value={this.state.newPortfolioName}
            />
          </div>

          <button
            onClick={this.handleCreateClick}
            disabled={!this.isNewPortfolioNameValid}
            className={styles.button}
          >
            Create Portfolio
          </button>
        </div>
      </div>
    );
  }
}

PortfolioManager.propTypes = {
  selectedPortfolioId: PropTypes.string.isRequired,
  managingCards: PropTypes.bool.isRequired,
  portfolios: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  setSelectedPortfolioId: PropTypes.func.isRequired,
  toggleManagingPortfolioCards: PropTypes.func.isRequired,
  createPortfolio: PropTypes.func.isRequired
};

export default PortfolioManager;
