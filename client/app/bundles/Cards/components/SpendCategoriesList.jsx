import React from 'react';

export default class SpendCategoriesList extends React.Component {
  renderIsFetching() {
    return (
      <p>Fetching SpendCategories...</p>
    );
  }

  renderFetchErrorMessage() {
    return (
      <p>Error: {this.props.fetchErrorMessage}</p>
    );
  }

  renderSpendCategories() {
    return (
      <p>Total # of SpendCategories {this.props.spendCategories.length}</p>
    );
  }

  renderContent() {
    if (this.props.isFetching) {
      return this.renderIsFetching();
    } else if (this.props.fetchErrorMessage) {
      return this.renderFetchErrorMessage();
    } else {
      return this.renderSpendCategories();
    }
  }

  render() {
    return (
      <div>
        <h3>SpendCategoriesList</h3>
        {this.renderContent()}
      </div>
    );
  }
}
