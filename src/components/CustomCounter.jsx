import React, { Component, PropTypes } from 'react';
import { Counter } from './Counter';
import { connect } from 'react-redux';
import { multireducerBindActionCreators } from 'multireducer-adailey14';
import * as CounterActions from 'redux-base/modules/counter';
import * as CustomCounterActions from 'redux-base/modules/customCounter';

const mapStateToProps = (state) => {
  return {
    counter: state.someCustomCounter
  };
};

const mapDispatchToProps = (dispatch) => {
  return multireducerBindActionCreators({ ...CounterActions, ...CustomCounterActions }, 'customCounter', dispatch);
};

class CustomCounter extends Component {
  render() {

    const { customAction, decrement100Async, ...restProps } = this.props;

    return (
      <div>
        Custom counter
        <Counter { ...restProps } />
        <button onClick={customAction}>+100</button>
        <button onClick={decrement100Async}>-100</button>
      </div>
    );
  }
}

CustomCounter.propTypes = {
  customAction: PropTypes.func.isRequired,
  decrement100Async: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCounter);
