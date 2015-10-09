import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';
import { routerStateReducer as router } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import loginFormPlugin from 'containers/LoginPage/loginForm/loginFormPlugin';

export default combineReducers({
  auth,
  counter,
  router,
  form: formReducer.plugin(loginFormPlugin)
});
