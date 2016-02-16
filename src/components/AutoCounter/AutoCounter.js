import React, { Component } from 'react';
import AutoCounterItem from './AutoCounterItem';
import { NICE, SUPER_NICE } from './colors';

export default class AutoCounter extends Component {
  render() {
    const styles = require('./AutoCounter.scss');
    return (
      <div>
        <div className={`${styles.app} some-class`}>
          <AutoCounterItem increment={1} color={NICE} />
          <AutoCounterItem increment={5} color={SUPER_NICE} />
        </div>
      </div>
    );
  }
}
