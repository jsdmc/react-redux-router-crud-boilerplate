import { combineReducers } from 'redux';

import counter from './counter';
import { routerStateReducer as router } from 'redux-router';

export default combineReducers({
  counter,
  router
});
