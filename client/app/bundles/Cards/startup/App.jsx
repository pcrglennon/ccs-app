import React from 'react';
import { Provider } from 'react-redux';

import { fetchSpendCategories } from '../actions/spendCategoriesActions';
import { fetchCards } from '../actions/cardsActions';
import configureStore from '../store/configureStore';
import AppContainer from '../containers/AppContainer';

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchSpendCategories());
    store.dispatch(fetchCards());
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
