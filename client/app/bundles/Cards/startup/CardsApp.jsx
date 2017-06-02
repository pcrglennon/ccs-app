import React from 'react';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchCards } from '../actions/cardsActions';
import reducers from '../reducers/index';
import CardsAppContainer from '../containers/CardsAppContainer';

const combinedReducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default class CardsApp extends React.Component {
  componentDidMount() {
    store.dispatch(fetchCards());
  }

  render() {
    return (
      <Provider store={store}>
        <CardsAppContainer />
      </Provider>
    );
  }
}
