import React, { Component } from 'react';
import { Counter } from './Counter';
import { connectMultireducer } from 'multireducer';
// import { multireducerBindActionCreators } from 'multireducer';

import * as CounterActions from 'redux-base/modules/multiCounter';

// function parameters are the same as in mapStateToProps from 'react-redux'
// except 1st parameter which is always multireducer key
const mapStateToProps = (key, state, ownProps) => {
  //
  console.log(ownProps.testProp);

  return {
    counter: state.multiCounters[key]
  };
};

// function parameters are the same as in mapDispatchToProps from 'react-redux'
// except 1st parameter which is always multireducer key

// const mapDispatchToProps = (key, dispatch, ownProps) => {
//   return multireducerBindActionCreators(key, CounterActions, dispatch);
// };

export class CounterMulti extends Component {
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
