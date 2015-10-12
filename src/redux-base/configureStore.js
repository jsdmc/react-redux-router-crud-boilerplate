import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware'
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from './modules/reducer';
import config from 'config';

let middlewares = [
  applyMiddleware(thunk),
  applyMiddleware(promiseMiddleware),
  reduxReactRouter({ createHistory })
];

// use only for dev mode
if (!config.isProduction) {
  middlewares.push(require('redux-devtools').devTools())
}

const createStoreWithMiddleware = compose(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextReducer = require('./modules/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}