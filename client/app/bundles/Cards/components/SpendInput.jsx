import React from 'react';
import PropTypes from 'prop-types';

class SpendInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: this.props.amount };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ amount: event.target.value });

    const parsedAmount = parseInt(event.target.value);

    if (!Number.isNaN(parsedAmount)) {
      this.props.updateAmount(parsedAmount);
    }
  }

  render() {
    return (
      <div>
        <em>$</em>
        <input
          value={this.state.amount}
          onChange={this.handleChange}
          type="number"
          step="0.01"
          min="0"
        />
      </div>
    );
  }
}

SpendInput.propTypes = {
  amount: PropTypes.number.isRequired,
  updateAmount: PropTypes.func.isRequired
};

export default SpendInput;
