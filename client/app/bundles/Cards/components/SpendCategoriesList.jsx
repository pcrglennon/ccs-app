import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/spend-categories.scss';

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
      <div className={styles.spendCategoriesList}>
        <h2>Spend Categories</h2>

        {this.renderSpendCategories()}
      </div>
    );
  }
}

SpendCategoriesList.propTypes = {
  spendCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default SpendCategoriesList;
