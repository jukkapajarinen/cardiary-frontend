import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';

const NotFoundView = () => {
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
};

export default NotFoundView;