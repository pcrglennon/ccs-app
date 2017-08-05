import React from 'react';
import PropTypes from 'prop-types';

class SpendInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: this.props.amount };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({ amount: event.target.value });

    const parsedAmount = event.target.value === '' ? 0.0 : parseInt(event.target.value);

    if (!Number.isNaN(parsedAmount)) {
      this.props.updateAmount(parsedAmount);
    }
  }

  handleBlur() {
    if (this.state.amount === '') {
      this.setState({ amount: 0.0 });
    }
  }

  render() {
    return (
      <div>
        <em>$</em>
        <input
          value={this.state.amount}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
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
