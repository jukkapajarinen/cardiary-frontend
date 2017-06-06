import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {ListGroup, ListGroupItem, Badge} from 'react-bootstrap';
import C3Chart from '../components/C3Chart';
import axios from '../axios_config';
import {updateStatsChoices as UpdateStatsChoicesAction} from '../actions/DashboardActions';
import {updateStatsData as UpdateStatsDataAction} from '../actions/DashboardActions';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.handleStatsDropsDown = this.handleStatsDropsDown.bind(this);
    axios({method: 'get', url: '/my-totals/'})
    .then(response => {
      this.props.UpdateStatsChoicesAction(['All', ...Object.keys(response.data.cars)]);
      this.props.UpdateStatsDataAction(
        'All',
        response.data.total_refuels,
        response.data.total_price,
        response.data.total_distance,
        response.data.total_volume
      );
    });
  }

  handleStatsDropsDown(eventKey) {
    axios({method: 'get', url: '/my-totals/'})
    .then(response => {
      this.props.UpdateStatsDataAction(
        eventKey,
        eventKey === 'All' ? response.data.total_refuels : response.data.cars[eventKey].total_refuels,
        eventKey === 'All' ? response.data.total_price : response.data.cars[eventKey].total_price,
        eventKey === 'All' ? response.data.total_distance : response.data.cars[eventKey].total_distance,
        eventKey === 'All' ? response.data.total_volume : response.data.cars[eventKey].total_volume
      );
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={ 6 }>
            <Panel header={<div>Statistics <span className="pull-right">
              <DropdownButton title={this.props.Dashboard.statsSelected} id="statsDropdown" onSelect={this.handleStatsDropsDown}>
                {this.props.Dashboard.statsChoices.map((option, i) => (
                  <MenuItem key={ option } eventKey={ option }>{option}</MenuItem>
                ))}
              </DropdownButton>
            </span></div>}>
              <ListGroup style={ {margin: '-16px'} }>
                <ListGroupItem>Total refuels <Badge>{this.props.Dashboard.statsTotalRefuels}</Badge></ListGroupItem>
                <ListGroupItem>Total price <Badge>{this.props.Dashboard.statsTotalPrice}</Badge></ListGroupItem>
                <ListGroupItem>Total distance <Badge>{this.props.Dashboard.statsTotalDistance}</Badge></ListGroupItem>
                <ListGroupItem>Total volume <Badge>{this.props.Dashboard.statsTotalVolume}</Badge></ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col sm={ 6 }>
            <Panel header="Graph">
              <C3Chart columns={[['data1', 30, 200, 100, 400, 150, 250], ['data2', 50, 20, 10, 40, 15, 25]]} type="donut"/>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Dashboard: state.Dashboard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateStatsChoicesAction: (choices) => {
      dispatch(UpdateStatsChoicesAction(choices));
    },
    UpdateStatsDataAction: (selected, totalRefuels, totalPrice, totalDistance, totalVolume) => {
      dispatch(UpdateStatsDataAction(selected, totalRefuels, totalPrice, totalDistance, totalVolume));
    }
  };
};

DashboardView.propTypes = {
  UpdateStatsChoicesAction: PropTypes.func.isRequired,
  UpdateStatsDataAction: PropTypes.func.isRequired,
  Dashboard: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
