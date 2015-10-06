import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import { SmartLink } from '../components';
import '../styles/main.scss';

export default class CoreLayout extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <Grid className="some-class">
        <Row>
          <h2>HELLO</h2>
        </Row>
        <Row>
          <Col md={1} xs={4}>
            <ul className="nav nav-pills nav-stacked">
              <SmartLink url='/counter' title='Counter' />
              <SmartLink url='/autoCounter' title='AutoCounter' />
              <SmartLink url='/movies' title='Movies page' />
            </ul>
          </Col>
          <Col md={11} xs={8}>{this.props.children}</Col>
        </Row>
      </Grid>
    );
  }
}