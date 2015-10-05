import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../styles/main.scss';

@connect(state => ({ routerState: state.router }))
export default class CoreLayout extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const links = [
      '/counter',
      '/autoCounter'
    ].map(l =>
      <p>
        <Link to={l}>{l}</Link>
      </p>
    );
    return (
      <div className="some-class">
        <h2>HELLO</h2>
        {links}
        {this.props.children}
      </div>
    );
  }
}