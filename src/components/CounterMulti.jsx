import React, { Component } from 'react';
import { Counter } from './Counter';
import {connectMultireducer, multireducerBindActionCreators} from 'multireducer';
import * as CounterActions from 'redux-base/modules/counter';

const mapStateToProps = (key, state) => {
  return {
    counter: state.multiCounters[key]
  };
};

const mapDispatchToProps = (key, dispatch) => {
  return multireducerBindActionCreators(key, CounterActions, dispatch);
};

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

export default connectMultireducer(mapStateToProps, mapDispatchToProps)(CounterMulti);
