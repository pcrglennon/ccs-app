import React from 'react';
import PropTypes from 'prop-types';

class SpendInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateAmount(parseInt(event.target.value));
  }

  render() {
    return (
      <div className="spend-input">
        <em>$</em>
        <input
          value={this.props.amount}
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
