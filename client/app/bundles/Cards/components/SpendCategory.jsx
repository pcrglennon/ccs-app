import React from 'react';
import PropTypes from 'prop-types';

class SpendCategory extends React.Component {
  render() {
    return (
      <div className="spend-category">
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

SpendCategory.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default SpendCategory;
