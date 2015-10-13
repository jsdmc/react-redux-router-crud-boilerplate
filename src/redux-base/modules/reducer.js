import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';
import movies from './movies';
import { routerStateReducer as router } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import loginFormPlugin from 'containers/LoginPage/loginForm/loginFormPlugin';

export default combineReducers({
  router,
  auth,
  counter,
  form: formReducer.plugin(loginFormPlugin),
  movies
});
