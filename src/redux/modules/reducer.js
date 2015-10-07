import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';
import { routerStateReducer as router } from 'redux-router';

export default combineReducers({
	auth,
  counter,
  router
});
