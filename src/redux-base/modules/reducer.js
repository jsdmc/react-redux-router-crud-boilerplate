import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';
import movies from './movies';
import { routerStateReducer as router } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import loginFormPlugin from 'containers/LoginPage/loginForm/loginFormPlugin';

import multireducer from 'multireducer-adailey14';
const customReducer = (reducer, reducerKey) => {

  const initialState = reducer();
  const key = '__multireducerKey=';

  return (state = initialState, action) => {
    if (action && action.type && action.type.includes(key)) {
      const keyStart = action.type.indexOf(key);
      const keyOnward = action.type.substring(keyStart);
      const actionReducerKey = keyOnward.substring(key.length);

      if (reducerKey === actionReducerKey) {

        const actionWithoutKey = {
          ...action,
          type: action.type.substring(0, keyStart)
        };

        const newStateValue = reducer(state, actionWithoutKey);

        // our case - simple state value
        if (typeof initialState === 'object') {
          return {
            ...state,
            ...newStateValue
          };
        }
        // case for simple state slices (numbers, strings)
        return newStateValue;
      }
    }
    return state;
  };
};

export default combineReducers({
  router,
  auth,
  counter,
  multiCounters: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  someCustomCounter: customReducer(counter, 'customCounter'), // <-- that key need to be in action
  form: formReducer.plugin(loginFormPlugin),
  movies
});
