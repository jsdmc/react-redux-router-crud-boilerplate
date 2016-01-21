// example of ducks composition
export default from './counter';

import { increment } from './counter';
// skip incrementIfOdd actionCreator - we will redefine it
export { INCREMENT_COUNTER, DECREMENT_COUNTER, increment, decrement, incrementAsync } from './counter';

export function incrementIfOdd() {
  return (dispatch, getState, globalDispatch, reducerKey) => {
    const { multiCounters: { [reducerKey]: counterState } } = getState();

    if (counterState % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
