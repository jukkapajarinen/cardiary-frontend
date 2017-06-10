import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import {Table, Pagination} from 'react-bootstrap';
import axios from '../axios_config';
import {updateData as UpdateDataAction} from '../actions/RefuelsActions';
import {updatePagination as UpdatePaginationAction} from '../actions/RefuelsActions';
import {updateCars as UpdateCarsAction} from '../actions/RefuelsActions';

class RefuelsView extends Component {
  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
    this.getRefuelsFromBackend(this.props.Refuels.activePage, this.props.Refuels.pageSize);
    axios({
      method: 'get',
      url: '/my-cars/'
    })
    .then(response => {
      let fixedCarsArray = [];
      response.data.results.forEach((car) => {
        fixedCarsArray[car.id] = car.name;
      });
      this.props.UpdateCarsAction(fixedCarsArray);
    });
  }

  handlePagination(eventKey) {
    this.getRefuelsFromBackend(eventKey, this.props.Refuels.pageSize);
  }

  getRefuelsFromBackend(page, pageSize) {
    axios({
      method: 'get',
      url: '/my-refuels/',
      params: {
        'page': page,
        'page_size': pageSize
      }
    })
    .then(response => {
      console.log(response.data);
      this.props.UpdateDataAction(response.data.results);
      this.props.UpdatePaginationAction(Math.ceil(response.data.count / pageSize), page);
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Table striped>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Car</th>
                  <th>Distance</th>
                  <th>Volume</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.Refuels.refuelsArray.map((refuel) => (
                  <tr key={ refuel.id }>
                    <td>{refuel.date}</td>
                    <td>{this.props.Refuels.carsArray.length > 0 ? this.props.Refuels.carsArray[refuel.car]: refuel.car}</td>
                    <td>{parseFloat(parseFloat(refuel.distance).toFixed(2)) + ' ' + this.props.Settings.distanceUnit}</td>
                    <td>{parseFloat(parseFloat(refuel.volume).toFixed(2).toString()) + ' ' + this.props.Settings.volumeUnit}</td>
                    <td>{parseFloat(parseFloat(refuel.price).toFixed(2).toString()) + ' ' + this.props.Settings.currencyUnit}</td>
                  </tr>
              ))}
              </tbody>
            </Table>
            <div className="text-center">
              <Pagination prev next last first items={ this.props.Refuels.numPages } activePage={ this.props.Refuels.activePage } maxButtons={ 5 } onSelect={ this.handlePagination }/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Refuels: state.Refuels,
    Settings: state.Settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateDataAction: (refuelsArray) => {
      dispatch(UpdateDataAction(refuelsArray));
    },
    UpdatePaginationAction: (numPages, activePage) => {
      dispatch(UpdatePaginationAction(numPages, activePage));
    },
    UpdateCarsAction: (carsObject) => {
      dispatch(UpdateCarsAction(carsObject));
    }
  };
};

RefuelsView.propTypes = {
  Refuels: PropTypes.object.isRequired,
  Settings: PropTypes.object.isRequired,
  UpdateCarsAction: PropTypes.func.isRequired,
  UpdateDataAction: PropTypes.func.isRequired,
  UpdatePaginationAction: PropTypes.func.isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(RefuelsView);
