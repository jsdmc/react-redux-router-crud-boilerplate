import React, { Component } from 'react';
import { Counter, CounterMulti, CustomCounter } from 'components';

export class CountesPage extends Component {

  render() {

    return (
      <div>
        <div>
          Global Counter
          <Counter />
        </div>
        <div>
          Counter1
          <CounterMulti testProp="1st" multireducerKey="counter1"/>
        </div>
        <div>
          Counter2
          <CounterMulti multireducerKey="counter2"/>
        </div>
        <div>
          Counter3
          <CounterMulti testProp="3rd" multireducerKey="counter3"/>
        </div>
        <div>
          <CustomCounter />
        </div>
      </div>
    );
  }
}

export default CountesPage;
