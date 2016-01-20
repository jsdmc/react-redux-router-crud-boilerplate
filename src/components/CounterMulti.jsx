import React, { Component } from 'react';
import { Counter } from './Counter';
import { connectMultireducer } from 'multireducer';
// import { multireducerBindActionCreators } from 'multireducer';

import * as CounterActions from 'redux-base/modules/counter';

const mapStateToProps = (key, state) => {
  return {
    counter: state.multiCounters[key]
  };
};

// const mapDispatchToProps = (key, dispatch) => {
//   return multireducerBindActionCreators(key, CounterActions, dispatch);
// };

class CounterMulti extends Component {
  render() {

    return (
      <div>
        Multicounter
        <Counter {...this.props} />
      </div>
    );
  }
}

// Can be mounted in both ways
// 1st one is more flexible, because in mapDispatchToProps function
// you can also return actions that should't be bound with multireducerKey for this component
// 2nd way - see CustomCounter.jsx example

// export default connectMultireducer(mapStateToProps, mapDispatchToProps)(CounterMulti);
export default connectMultireducer(mapStateToProps, CounterActions)(CounterMulti);
