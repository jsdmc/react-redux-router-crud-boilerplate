import React, { Component, PropTypes } from 'react';
import { SmartLink } from '../components';
import '../styles/main.scss';

export default class CoreLayout extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const navTop = () => (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React-Redux-Router-CRUD-boilerplate</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    );

    return (
      <div>
        { navTop() }
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <SmartLink url='/counter' title='Counter' />
                <SmartLink url='/autoCounter' title='AutoCounter' />
                <SmartLink url='/movies' title='Movies page' />
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