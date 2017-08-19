import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardProperties: props.cardProperties,
      partialCardName: props.partialCardName
    };

    this.handleBankIdChange = this.handleBankIdChange.bind(this);
    this.handleNetworkIdChange = this.handleNetworkIdChange.bind(this);
    this.handlePartialCardNameChange = this.handlePartialCardNameChange.bind(this);
  }

  handleBankIdChange(event) {
    this.updateCardProperty('bankId', event.target.value);
  }

  handleNetworkIdChange(event) {
    this.updateCardProperty('networkId', event.target.value);
  }

  handlePartialCardNameChange(event) {
    const partialCardName = event.target.value.trim();

    this.setState({ partialCardName: partialCardName });
    this.props.updatePartialCardName(partialCardName);
  }

  updateCardProperty(key, value) {
    const cardProperties = this.state.cardProperties;

    this.setState({
      cardProperties: Object.assign({}, cardProperties, {
        [key]: value
      })
    });

    this.props.updateCardProperty(key, value);
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

          <select value={this.state.cardProperties.bankId} onChange={this.handleBankIdChange}>
            <option value=''>--All--</option>

            {this.renderOptions(this.props.banks)}
          </select>
        </div>

        <div className={styles.filter}>
          <label>Networks:</label>

          <select value={this.state.cardProperties.networkId} onChange={this.handleNetworkIdChange}>
            <option value=''>--All--</option>

            {this.renderOptions(this.props.networks)}
          </select>
        </div>

        <div className={styles.filter}>
          <label>Card Name:</label>

          <input
            type="text"
            onChange={this.handlePartialCardNameChange}
            value={this.state.partialCardName}
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
  partialCardName: PropTypes.string.isRequired,
  banks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  networks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  updateCardProperty: PropTypes.func.isRequired,
  updatePartialCardName: PropTypes.func.isRequired
};

export default Filters;
