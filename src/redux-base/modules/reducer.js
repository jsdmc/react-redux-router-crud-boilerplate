import { combineReducers } from 'redux';

import counter from './counter';
import customCounter from './customCounter';
import auth from './auth';
import movies from './movies';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loginFormPlugin from 'containers/LoginPage/loginForm/loginFormPlugin';

import multireducer from 'multireducer';

export default combineReducers({
  routing: routerReducer,
  auth,
  counter,
  multiCounters: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  myNamespace: combineReducers({
    someCustomCounter: multireducer(customCounter, 'customCounter'), // <-- catch actions that contain the key
  }),
  form: formReducer.plugin(loginFormPlugin),
  movies
});
