import baseCounter from './multiCounter';

// --------------------------- Action constants --------------------------
const INCREMENT100 = 'INCREMENT100';
const DECREMENT100_ASYNC = 'DECREMENT100_ASYNC';

// --------------------------- Reducer function --------------------------
export default function counter(state = 0, action = {}) {
  switch (action.type) {
    case INCREMENT100:
      return state + 100;
    case DECREMENT100_ASYNC:
      return state - 100;
    default:
      return baseCounter(state, action);
  }
}

import { increment } from './multiCounter';
// re-export other actions
export { INCREMENT_COUNTER, DECREMENT_COUNTER, increment, decrement, incrementAsync } from './multiCounter';

// --------------------------- Action functions --------------------------
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { myNamespace: { someCustomCounter: counterState } } = getState();

    if (counterState % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}


export function increment100() {
  return {
    type: INCREMENT100
  };
}

// let's say it's some action imported from some duck or other module
const anotherThunkAction = () => dispatch => {
  dispatch({ type: 'HELLO_ACTION_ASYNC' });
};

export function decrement100Async() {
  return (dispatch, getState, dispatchGlobal) => {

    const { someCustomCounter } = getState();

    console.log(someCustomCounter);

    dispatch({ type: DECREMENT100_ASYNC });

    // Lets decrement global counter
    dispatchGlobal({ type: 'DECREMENT_COUNTER' });

    // we can dispatch thunks to global namespace
    // and from within the thunk action also will be dispatched as global -
    // means action type will contain reducer key specified for sonnected component
    dispatchGlobal(anotherThunkAction());
  };
}
