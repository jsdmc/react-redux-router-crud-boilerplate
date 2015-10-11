import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware'
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from './modules/reducer';
import routes from '../routes';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(promiseMiddleware),
  reduxReactRouter({ routes, createHistory }),
  devTools()
)(createStore);

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