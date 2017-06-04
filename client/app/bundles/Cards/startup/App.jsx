import React from 'react';
import { Provider } from 'react-redux';

import { fetchCards } from '../actions/cardsActions';
import { fetchSpendCategories } from '../actions/spendCategoriesActions';
import configureStore from '../store/configureStore';
import AppContainer from '../containers/AppContainer';

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchCards());
    store.dispatch(fetchSpendCategories());
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
