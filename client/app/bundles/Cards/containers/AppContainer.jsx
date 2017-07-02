import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

function mapStateToProps(state) {
  return {
    errors: state.initializeStore.errors,
    isFetching: state.initializeStore.isFetching
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
