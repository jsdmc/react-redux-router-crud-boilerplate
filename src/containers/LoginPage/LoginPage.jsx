import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { login } from '../../redux/modules/auth';

import './LoginPage.scss';

class Login extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('Login: componentWillReceiveProps: '+nextProps);
    console.log('user: '+this.props.user+'\tnextUser='+nextProps.user);

    if (nextProps.user) {
      // logged in, let's show home
      this.dispatch(pushState(null, '/counter'));
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const username = this.refs.username;  // need for getDOMNode() call going away in React 0.14
    const password = this.refs.password;
    this.props.dispatch(login(username.value, password.value));
    // username.value = '';
    // password.value = '';
  }

  render(){
    const {user, loginError} = this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default panel-signin">
              <div className="panel-heading">
                <h3 className="panel-title">Please Log in</h3>
              </div>
              <form className="form-signin">
                
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"/></span>
                  <input type="text" ref="username" className="form-control" placeholder="Username" required autofocus/>
                </div>

                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"/></span>
                  <input type="password" ref="password" className="form-control" placeholder="Password" required/>
                </div>

                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>

                {
                  !user && loginError && 
                  <div className="alert alert-danger">              
                    {loginError.message}. Hint: use admin/password to log in.
                  </div>
                }
       
                <button className="btn btn-primary btn-block" onClick={::this.handleLogin}><i className="fa fa-sign-in"/>{' '}Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

Login.propTypes = {
  user: PropTypes.string,
  loginError: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  routerState: PropTypes.object.isRequired
};

function mapStateToProps(state){
  const { auth, router } = state;
  if(auth){
    return {user: auth.user, loginError: auth.loginError, routerState: router};
  }else{
    return {user: null, routerState: router};
  }
}

export default connect(mapStateToProps)(Login);
