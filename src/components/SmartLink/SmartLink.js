import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ routerState: state.router });

class SmartLink extends Component {
  render() {
    const styles = require('./SmartLink.scss');
    const { title, url, routerState } = this.props;
    const active = routerState.location.pathname == url;
    return (
     <p>
        <Link className={classnames({ [styles.activeLink] : active })} to={url}>
          <span>{title}</span>
        </Link>
      </p>
    );
  }
}

SmartLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  routerState: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SmartLink);