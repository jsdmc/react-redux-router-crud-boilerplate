import baseCounter from './counter';

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

// --------------------------- Action functions --------------------------
export function increment100() {
  return {
    type: INCREMENT100
  };
}

export function decrement100Async() {
  return (dispatch, getState, dispatchGlobal) => {

    const { someCustomCounter } = getState();

    console.log(someCustomCounter);

    dispatch({ type: DECREMENT100_ASYNC });

    dispatchGlobal({ type: 'INCREMENT_COUNTER'});

    dispatchGlobal({ type: 'HELLO_ACTION'});

    dispatchGlobal((() => (dispatch1) => dispatch1({ type: 'HELLO_ACTION_ASYNC'}))());
  };
}
