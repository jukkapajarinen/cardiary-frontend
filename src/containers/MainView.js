import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {ListGroup, ListGroupItem, Badge} from 'react-bootstrap';
import C3Chart from '../components/C3Chart';

const chartColumnsData = [
  ['data1', 30, 200, 100, 400, 150, 250],
  ['data2', 50, 20, 10, 40, 15, 25]
];

export default class MainView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={ 6 }>
            <Panel header="Statistics">
              <ListGroup style={ {margin: '-16px'} }>
                <ListGroupItem>Total Refills <Badge>4</Badge></ListGroupItem>
                <ListGroupItem>Total Mileage <Badge>200 133</Badge></ListGroupItem>
                <ListGroupItem>Total Fuel <Badge>1 400</Badge></ListGroupItem>
                <ListGroupItem>Total Expenses <Badge>4500</Badge></ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col sm={ 6 }>
            <Panel header="Graph">
              <C3Chart columns={ chartColumnsData } type="donut"/>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
