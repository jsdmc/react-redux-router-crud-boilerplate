import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware';
import reducer from './modules/reducer';
import config from 'config';

const middlewares = [
  applyMiddleware(
    thunk,
    promiseMiddleware
  )
];

// use only for dev mode
if (!config.isProduction) {
  const DevTools = require('utils/DevTools').default;
  middlewares.push(DevTools.instrument());
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(...middlewares)
  );

  if (!config.isProduction && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextReducer = require('./modules/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
