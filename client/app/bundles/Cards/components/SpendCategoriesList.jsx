import React from 'react';
import PropTypes from 'prop-types';

import SpendCategory from './SpendCategory';

class SpendCategoriesList extends React.Component {
  renderFetchingMessage() {
    if (this.props.isFetching) {
      return (
        <p>Fetching SpendCategories...</p>
      );
    } else { return null; }
  }

  renderFetchErrorMessage() {
    if (this.props.fetchErrorMessage) {
      return (
        <p>Error: {this.props.fetchErrorMessage}</p>
      );
    } else { return null; }
  }

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
        {this.renderFetchingMessage()}
        {this.renderFetchErrorMessage()}
        {this.renderSpendCategories()}
      </div>
    );
  }
}

SpendCategoriesList.propTypes = {
  spendCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchErrorMessage: PropTypes.string.isRequired
};

export default SpendCategoriesList;
