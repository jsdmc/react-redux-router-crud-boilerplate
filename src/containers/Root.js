import React, { Component } from 'react';
import { Counter, AutoCounter } from './../components';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <Counter />
        <AutoCounter />
      </div>
    );
  }
}