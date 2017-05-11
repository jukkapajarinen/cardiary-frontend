import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, Panel} from "react-bootstrap";
import {ListGroup, ListGroupItem, Badge} from "react-bootstrap";
import {C3Chart} from "./C3Chart";

const chartColumnsData = [
  ['data1', 30, 200, 100, 400, 150, 250],
  ['data2', 50, 20, 10, 40, 15, 25]
];

class Main extends Component {
  constructor(props) {
    console.log("Main constructor");
    super(props);
  }

  render() {
    console.log("Main render");
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <Panel header="Statistics">
              <ListGroup style={{margin: "-16px"}}>
                <ListGroupItem>Total Refills <Badge>4</Badge></ListGroupItem>
                <ListGroupItem>Total Mileage <Badge>200 133</Badge></ListGroupItem>
                <ListGroupItem>Total Fuel <Badge>1 400</Badge></ListGroupItem>
                <ListGroupItem>Total Expenses <Badge>4500</Badge></ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col sm={6}>
            <Panel header={this.props.greeting}>
              <C3Chart columns={chartColumnsData} type="donut"/>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greetings.greeting
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);