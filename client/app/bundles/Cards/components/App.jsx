import React from 'react';
import PropTypes from 'prop-types';

import CardsListContainer from '../containers/CardsListContainer';
import SpendCategoriesListContainer from '../containers/SpendCategoriesListContainer';

class App extends React.Component {
  // TODO - components should render their own status/error messages, rather than catching them all here
  // This is only done b/c of possible race condition w/ API response order (see AppContainer)
  renderFetchingMessage() {
    return (
      <div>
        <h2>Fetching...</h2>
      </div>
    );
  }

  renderErrorMessages() {
    return (
      <div>
        {this.props.errorMessages.map((errorMessage, index) => {
          return (
            <div key={index}>Error: {errorMessage}</div>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.isFetching) {
      return this.renderFetchingMessage();
    } else if (this.props.errorMessages.length) {
      return this.renderErrorMessages();
    } else {
      return (
        <div>
          <SpendCategoriesListContainer />
          <CardsListContainer />
        </div>
      );
    }
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
