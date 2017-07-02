import React from 'react';
import PropTypes from 'prop-types';

import SpendInputContainer from '../containers/SpendInputContainer';

class SpendCategory extends React.Component {
  render() {
    return (
      <div className="spend-category">
        <p>Name: {this.props.name}</p>

        <SpendInputContainer
          spendCategoryId={this.props.id}
        />
      </div>
    );
  }
}

SpendCategory.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SpendCategory;
