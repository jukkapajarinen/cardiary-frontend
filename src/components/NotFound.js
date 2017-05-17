import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const NotFound = () => {
  return (
    <Grid>
      <Row>
        <Col xs={ 12 }>
          <p>Sorry, page not found.</p>
        </Col>
      </Row>
    </Grid>
  );
};
