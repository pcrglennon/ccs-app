import React from 'react';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchSpendCategories } from '../actions/spendCategoriesActions';
import { fetchCards } from '../actions/cardsActions';
import reducers from '../reducers/index';
import AppContainer from '../containers/AppContainer';

const combinedReducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

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
