import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { login } from 'redux-base/modules/auth';
import loginFormValidation from './loginForm/loginFormValidation';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

// react binding for redux
// https://github.com/rackt/react-redux
const mapStateToProps = (state) => ({
  user: state.auth.user,
  loginError: state.auth.loginError
});

// super nice UX. Thanks to Redux-form all fields are validating when onChange and onBlur event occured
// https://github.com/erikras/redux-form
const reduxFormConfig = {
  form: 'loginForm',                      // the name of your form and the key to where your form's state will be mounted
  fields: ['userName', 'password', 'rememberMe'], // a list of all your fields in your form
  validate: loginFormValidation             // a synchronous validation function
};

// things above can be replaced with decorator connected to our component.
/*
@reduxForm({
  form: 'loginForm',
  fields: ['userName', 'password', 'rememberMe'],
  validate: loginFormValidation
},
state => ({
  user: state.auth.user,
  loginError: state.auth.loginError
}))
*/

class Login extends Component {

  // component will recieve new properies because we are listening for state.auth.user of global App state
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      // logged in, let's show home
      browserHistory.push('/counter');
    }
  }

  // do some action when submitting form
  handleLogin(data) {
    this.props.dispatch(login(data.userName, data.password));
  }

  render() {
    const styles = require('./LoginPage.scss');

    // grab props related to redux-form
    const { user, loginError, fields: { userName, password, rememberMe }, handleSubmit } = this.props;

    const fieldClasses = (field, classes) => classnames(classes, {
      'has-error': field.error && field.touched
    });
    const errorBlock = (field) => (field.error && field.touched && <small className="help-block">{field.error}</small>);

    return (
      <div className={`container ${styles.loginPage}`}>
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-sm-5 col-sm-offset-5">
            <div className="panel panel-default panel-signin">
              <div className="panel-heading">
                <h3 className="panel-title">Please Log in</h3>
              </div>
              <form className="form-signin" onSubmit={handleSubmit(::this.handleLogin)}>

                <div className={fieldClasses(userName, 'form-group')}>
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"/></span>
                    { /* // will pass value, onBlur and onChange */ }
                    <input type="text" className="form-control" {...userName} placeholder="Username" autoFocus/>
                  </div>
                  {errorBlock(userName)}
                </div>

                <div className={fieldClasses(password, 'form-group')}>
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"/></span>
                    <input type="password" className="form-control" {...password} placeholder="Password"/>
                  </div>
                  {errorBlock(password)}
                </div>

                <div className={fieldClasses(rememberMe, 'form-group')}>
                  <div className="checkbox input-group">
                    <label>
                      <input type="checkbox" value="remember-me" {...rememberMe}/> <span>Remember me</span>
                    </label>
                  </div>
                  {errorBlock(rememberMe)}
                </div>

                {
                  !user && loginError &&
                  <div className="alert alert-danger">
                    {loginError.message} Hint: use admin@example.com/password to log in.
                  </div>
                }

                <button className="btn btn-primary btn-block" onSubmit={handleSubmit(::this.handleLogin)}><i className="fa fa-sign-in"/>{' '}Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  loginError: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  // redux-form related props
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

// export the wrapped with decorators component
// of course '@' syntax can be used. But Sun approach helps to test component later
export default reduxForm(reduxFormConfig, mapStateToProps)(Login);
