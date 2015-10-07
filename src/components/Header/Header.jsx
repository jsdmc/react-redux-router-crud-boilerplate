import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Header.scss';

export default class Header extends Component {
  onLogoutClick() {
    event.preventDefault();
    // this.props.handleLogout();
  }

  render() {
    return (
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
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className='fa fa-user header_fa'></span>'Anonymous'<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Profile</a></li>
                  <li className="logout-link"><a href="#" onClick={e=>this.onLogoutClick(e)}><i className="fa fa-sign-out header_fa"/>Log out</a></li>
                 
                  <li role="separator" className="divider"></li>                    
                  <li>
                    <a href="https://github.com/cloudmu/react-redux-starter-kit"target="_blank" title="View on Github"><i className="fa fa-github header_fa"/>Github</a>
                  </li>
                </ul>
              </li>           
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}