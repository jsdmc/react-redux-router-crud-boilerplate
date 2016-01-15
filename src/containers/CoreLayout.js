import React, { Component, PropTypes } from 'react';
import { Header, SmartLink } from '../components';
import '../styles/main.scss';

export default class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <SmartLink url="/counter" title="Counter" />
                <SmartLink url="/countersPage" title="CountersPage" />
                <SmartLink url="/autoCounter" title="AutoCounter" />
                <SmartLink url="/movies" title="Movies page" />
              </ul>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
