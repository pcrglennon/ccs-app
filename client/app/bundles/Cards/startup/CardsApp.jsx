import React from 'react';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from 'redux-thunk';

import reducers from '../reducers/index';

import CardsAppContainer from '../containers/CardsAppContainer';

export default (props) => {
  const combinedReducer = combineReducers(reducers);

  const store = applyMiddleware(middleware)(createStore)(combinedReducer);

  return (
    <Provider store={store}>
      <CardsAppContainer />
    </Provider>
  );
}
