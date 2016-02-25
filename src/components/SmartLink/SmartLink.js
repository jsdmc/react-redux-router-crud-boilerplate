import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Smart component that listens to url changes and rerenders inself
// Decorator @connect no used for testability reasons.
// Instead, function defined on top of component. It's more readable
const mapStateToProps = (state) => ({ location: state.routing.locationBeforeTransitions });

class SmartLink extends Component {
  render() {
    // Load styles object and use generated class names.
    // Sinse the are unique by default (specified in webpack config) - you can be sure you will not breake global styles
    const styles = require('./SmartLink.scss');

    const { title, url, location } = this.props;
    const active = location.pathname === url;
    return (
      <li className={classnames({ [styles.activeLink]: active, active })} >
        {/* Objects literal features - Computed property names, Shorthand property names - ES6

            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer

            For react router Link you can specify what class name to apply when route is active
            But it applies class to "a" tag. Bootstrap styles want "active" on "li". Let's do it

            https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md

            Functionality of SmartLink just shows how smart compoments should work.
        */}
        <Link activeClassName="active" to={{ pathname: url }}>
          <span>{title}</span>
        </Link>
      </li>
    );
  }
}

// static property moved out from class definition
// Just looks better when it's at the bottom of the file.
// When you'll define more properties - it takes to much space in the class definition
SmartLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SmartLink);
