import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers/index';

const combinedReducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    combinedReducer,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  );
}
