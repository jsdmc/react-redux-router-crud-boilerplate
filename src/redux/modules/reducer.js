import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';
import { routerStateReducer as router } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	auth,
  counter,
  router,
  form: formReducer
});
