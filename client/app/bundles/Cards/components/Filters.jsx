import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankId: props.cardProperties.bankId,
      networkId: props.cardProperties.networkId,
      selectedCardsOnly: props.selectedCardsOnly
    };

    this.handleBankIdChange = this.handleBankIdChange.bind(this);
    this.handleNetworkIdChange = this.handleNetworkIdChange.bind(this);
    this.handleSelectedCardsOnlyChange = this.handleSelectedCardsOnlyChange.bind(this);
  }

  // TODO - filter this & networkId (and any other exact card property filters) into
  // own component
  handleBankIdChange(event) {
    const id = event.target.value;

    this.setState({ bankId: id });
    this.props.updateBankId(id);
  }

  handleNetworkIdChange(event) {
    const id = event.target.value;

    this.setState({ networkId: id });
    this.props.updateNetworkId(id);
  }

  handleSelectedCardsOnlyChange(event) {
    this.setState({ selectedCardsOnly: event.target.checked });
    this.props.updateSelectedCardsOnly(event.target.checked);
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
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label>Banks:</label>

          <select value={this.state.bankId} onChange={this.handleBankIdChange}>
            <option value=''>--All--</option>

            {this.renderOptions(this.props.banks)}
          </select>
        </div>

        <div className={styles.filter}>
          <label>Networks:</label>

          <select value={this.state.networkId} onChange={this.handleNetworkIdChange}>
            <option value=''>--All--</option>

            {this.renderOptions(this.props.networks)}
          </select>
        </div>

        <div className={styles.filter}>
          <label>Show Selected Only:</label>

          <input
            type="checkbox"
            onChange={this.handleSelectedCardsOnlyChange}
            value={this.state.selectedCardsOnly}
          />
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  cardProperties: PropTypes.shape({
    bankId: PropTypes.string.isRequired,
    networkId: PropTypes.string.isRequired
  }),
  selectedCardsOnly: PropTypes.bool.isRequired,
  banks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  networks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  updateBankId: PropTypes.func.isRequired,
  updateNetworkId: PropTypes.func.isRequired,
  updateSelectedCardsOnly: PropTypes.func.isRequired
};

export default Filters;
