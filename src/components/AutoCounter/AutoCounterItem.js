import React, { Component, PropTypes } from 'react';

export default class AutoCounterItem extends Component {

  static propTypes = {
    increment: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          Counter ({this.props.increment}): {this.state.counter}
        </h1>
      </div>
    );
  }
}
