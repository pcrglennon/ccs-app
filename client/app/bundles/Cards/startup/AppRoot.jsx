import React from 'react';
import { Provider } from 'react-redux';

import { initialize } from '../actions/initialize';
import configureStore from '../store/configureStore';
import AppContainer from '../containers/AppContainer';

const store = configureStore();

export default class AppRoot extends React.Component {
  componentDidMount() {
    store.dispatch(initialize());
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
