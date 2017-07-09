import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankId: props.bankId,
      networkId: props.networkId
    };

    this.handleBankIdChange = this.handleBankIdChange.bind(this);
    this.handleNetworkIdChange = this.handleNetworkIdChange.bind(this);
  }

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
      </div>
    );
  }
}

Filters.propTypes = {
  bankId: PropTypes.string.isRequired,
  networkId: PropTypes.string.isRequired,
  banks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  networks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  updateBankId: PropTypes.func.isRequired,
  updateNetworkId: PropTypes.func.isRequired
};

export default Filters;
