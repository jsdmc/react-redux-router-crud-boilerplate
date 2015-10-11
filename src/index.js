// react should be included when use ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';

import { Provider } from 'react-redux';
import configureStore from './redux-base/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<ReduxRouter />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./utils/createDevToolsWindow')(store);
}
