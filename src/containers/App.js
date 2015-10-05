import React, { Component } from 'react';
import { Counter, AutoCounter } from '../components';
import '../styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div className="some-class">
        <h2>HELLO</h2>
        <Counter />
        <AutoCounter />
      </div>
    );
  }
}