import React, { Component } from 'react';
import { Counter } from './Counter';
import {connectMultireducer, multireducerBindActionCreators} from 'multireducer-adailey14';
import * as CounterActions from 'redux-base/modules/counter';

const mapStateToProps = (state, key) => {
  return {
    counter: state.multiCounters[key]
  };
};

const mapDispatchToProps = (dispatch, key) => {
  return multireducerBindActionCreators(CounterActions, key, dispatch);
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
