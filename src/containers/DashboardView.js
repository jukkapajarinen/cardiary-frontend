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
import {updateC3ChartData as UpdateC3ChartDataAction} from '../actions/DashboardActions';

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
    axios({method: 'get', url: '/my-refuels/'})
    .then(response => {
      let c3ChartDates = [];
      response.data.results.forEach((refuel) => {c3ChartDates.indexOf(refuel.date) === -1 ? c3ChartDates.push(refuel.date) : null;});
      let c3ChartCars = [];
      response.data.results.forEach((refuel) => {c3ChartCars.indexOf(refuel.car_name) === -1 ? c3ChartCars.push(refuel.car_name) : null;});
      let c3ChartData = [];
      for(let i = 0; i < c3ChartCars.length; i++) {
        let c3ChartRow = [c3ChartCars[i]];
        for(let j = 1; j < c3ChartDates.length+1; j++ ) {
          response.data.results.forEach((refuel) => {(refuel.car_name === c3ChartCars[i] && refuel.date === c3ChartDates[j] && c3ChartRow[j] === undefined) ? c3ChartRow.push(parseFloat(refuel.consumption)) : null;});
          c3ChartRow[j] === undefined ? c3ChartRow.push(0) : null;
        }
        c3ChartData.push(c3ChartRow);
      }
      c3ChartData = [['x', ...c3ChartDates], ...c3ChartData];
      this.props.UpdateC3ChartDataAction(c3ChartData);
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
            <Panel header={ <div>Statistics <span className="pull-right">
              <DropdownButton title={ this.props.Dashboard.statsSelected } id="statsDropdown" onSelect={ this.handleStatsDropsDown }>
                {this.props.Dashboard.statsChoices.map((option) => (
                  <MenuItem key={ option } eventKey={ option }>{option}</MenuItem>
                ))}
              </DropdownButton>
            </span></div> }>
              <ListGroup style={ {margin: '-16px'} }>
                <ListGroupItem>Total refuels <Badge>{this.props.Dashboard.statsTotalRefuels}</Badge></ListGroupItem>
                <ListGroupItem>Total price <Badge>{this.props.Dashboard.statsTotalPrice}</Badge></ListGroupItem>
                <ListGroupItem>Total distance <Badge>{this.props.Dashboard.statsTotalDistance}</Badge></ListGroupItem>
                <ListGroupItem>Total volume <Badge>{this.props.Dashboard.statsTotalVolume}</Badge></ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col sm={ 6 }>
            <Panel header="Consumption">
              <C3Chart type="line" columns={ this.props.Dashboard.c3ChartData.length > 0 ? this.props.Dashboard.c3ChartData.slice(1) : ['wait', 0] }
                       xAxis={ this.props.Dashboard.c3ChartData.length > 0 ? this.props.Dashboard.c3ChartData[0].slice(1) : ['wait'] }/>
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
    },
    UpdateC3ChartDataAction: (c3Chartdata) => {
      dispatch(UpdateC3ChartDataAction(c3Chartdata));
    }
  };
};

DashboardView.propTypes = {
  UpdateStatsChoicesAction: PropTypes.func.isRequired,
  UpdateStatsDataAction: PropTypes.func.isRequired,
  UpdateC3ChartDataAction: PropTypes.func.isRequired,
  Dashboard: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
