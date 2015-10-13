import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware'
import transitionMiddleware from './middleware/transitionMiddleware';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from './modules/reducer';
import config from 'config';

let middlewares = [
  transitionMiddleware,
  thunk, 
  promiseMiddleware
];

let createFinalStore;

// use only for dev mode
if (!config.isProduction) {
  const devtools = require('redux-devtools').devTools;
  createFinalStore = compose(applyMiddleware(...middlewares), devtools())(createStore);
} else {
  createFinalStore = applyMiddleware(...middlewares)(createStore);
}

const createStoreWithMiddleware = reduxReactRouter({ createHistory })(createFinalStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (!config.isProduction && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextReducer = require('./modules/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}