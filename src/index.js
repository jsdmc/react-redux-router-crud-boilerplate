// react should be included when use ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';

import { Provider } from 'react-redux';
import configureStore from './redux-base/configureStore';
import getRoutes from './routes';

import config from 'config';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('root')
);

if (!config.isProduction) {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./utils/createDevToolsWindow')(store);
}
