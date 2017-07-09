import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/app.scss';

import CardsListContainer from '../containers/CardsListContainer';
import FiltersContainer from '../containers/FiltersContainer';
import SpendCategoriesListContainer from '../containers/SpendCategoriesListContainer';

class App extends React.Component {
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
        {this.props.errors.map((error, index) => {
          return (
            <div key={index}>Error: {error}</div>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.isFetching) {
      return this.renderFetchingMessage();
    } else if (this.props.errors.length) {
      return this.renderErrorMessages();
    } else {
      return (
        <div className={styles.app}>
          <FiltersContainer />
          <SpendCategoriesListContainer />
          <CardsListContainer />
        </div>
      );
    }
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
