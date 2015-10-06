import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SmartLink } from '../components';
import '../styles/main.scss';

export default class CoreLayout extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const links = [
      '/counter',
      '/autoCounter'
    ].map(l => <SmartLink url={l} title={l} key={l}/>);

    return (
      <Grid className="some-class">
        <Row>
          <h2>HELLO</h2>
        </Row>
        <Row>
          <Col md={1} xs={4}>{links}</Col>
          <Col md={11} xs={8}>{this.props.children}</Col>
        </Row>
      </Grid>
    );
  }
}