import React, { Component } from 'react';
import { CounterMulti, CustomCounter } from 'components';

export class CountesPage extends Component {

  render() {

    return (
      <div>
        <div>
          Counter1
          <CounterMulti multireducerKey="counter1"/>
        </div>
        <div>
          Counter2
          <CounterMulti multireducerKey="counter2"/>
        </div>
        <div>
          Counter3
          <CounterMulti multireducerKey="counter3"/>
        </div>
        <div>
          <CustomCounter />
        </div>
      </div>
    );
  }
}

export default CountesPage;
