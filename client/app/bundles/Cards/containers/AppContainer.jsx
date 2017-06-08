import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

function mapStateToProps(state) {
  // Hack - work around race condition caused by order of API responses
  // TODO - load all data in one API call, to avoid race condition altogether
  const errorMessages = [state.cardsStore.fetchErrorMessage, state.spendCategoriesStore.fetchErrorMessage]
    .filter((errorMessage) => errorMessage.length);
  return {
    isFetching: state.cardsStore.isFetching || state.spendCategoriesStore.isFetching,
    errorMessages: errorMessages
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
