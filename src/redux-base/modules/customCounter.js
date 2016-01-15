import baseCounter from './counter';

// --------------------------- Action constants --------------------------
const CUSTOM_ACTION = 'CUSTOM_ACTION';
const DECREMENT100_ASYNC = 'DECREMENT100_ASYNC';

// --------------------------- Reducer function --------------------------
export default function counter(state = 0, action = {}) {
  switch (action.type) {
    case CUSTOM_ACTION:
      return state + 100;
    case DECREMENT100_ASYNC:
      return state - 100;
    default:
      return baseCounter(state, action);
  }
}

// --------------------------- Action functions --------------------------
export function customAction() {
  return {
    type: CUSTOM_ACTION
  };
}

export function decrement100Async() {
  return (dispatch, getState) => {

    const { someCustomCounter } = getState();

    console.log(someCustomCounter);

    dispatch({ type: DECREMENT100_ASYNC });
  };
}
