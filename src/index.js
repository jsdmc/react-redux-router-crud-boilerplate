// react should be included when use ReactDom
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
