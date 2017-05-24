import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';

export default class NotFoundView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Alert bsStyle="danger">
              <strong>Oops!</strong> page not found.
            </Alert>
          </Col>
        </Row>
      </Grid>
    );
  }
}