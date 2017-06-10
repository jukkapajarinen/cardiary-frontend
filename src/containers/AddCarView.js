import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

class AddCarView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Enter refuel details">
              AddCarView under development
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(null, null)(AddCarView);
