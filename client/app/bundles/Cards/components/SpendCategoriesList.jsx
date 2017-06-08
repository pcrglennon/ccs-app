import React from 'react';
import PropTypes from 'prop-types';

import SpendCategory from './SpendCategory';

class SpendCategoriesList extends React.Component {
  renderSpendCategories() {
    return this.props.spendCategories.map((spendCategory) => {
      return (
        <SpendCategory
          key={spendCategory.id}
          {...spendCategory}
        />
      );
    });
  }

  render() {
    return (
      <div className="spend-categories-list">
        <h3>SpendCategoriesList</h3>

        {this.renderSpendCategories()}
      </div>
    );
  }
}

SpendCategoriesList.propTypes = {
  spendCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default SpendCategoriesList;
