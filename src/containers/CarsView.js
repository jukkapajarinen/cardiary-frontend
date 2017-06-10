import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import {Table, Pagination, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import axios from '../axios_config';
import {updateData as UpdateDataAction} from '../actions/CarsActions';
import {updatePagination as UpdatePaginationAction} from '../actions/CarsActions';

class CarsView extends Component {
  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
    this.handlePriorityUp = this.handlePriorityUp.bind(this);
    this.handlePriorityDown = this.handlePriorityDown.bind(this);
    this.getCarsFromBackend(this.props.Cars.activePage, this.props.Cars.pageSize);
  }

  handlePagination(eventKey) {
    this.getCarsFromBackend(eventKey, this.props.Cars.pageSize);
  }

  getCarsFromBackend(page, pageSize) {
    axios({
      method: 'get',
      url: '/my-cars/',
      params: {
        'page': page,
        'page_size': pageSize,
        'o': 'priority'
      }
    })
    .then(response => {
      this.props.UpdateDataAction(response.data.results);
      this.props.UpdatePaginationAction(Math.ceil(response.data.count / pageSize), page);
    });
  }

  handlePriorityUp(priority1, priority2) {
    this.props.Cars.carsArray.forEach((car) => {
      if (car.priority === priority1) {
        console.log('Car1 was: ' + car.id);
      }
      if (car.priority === priority2) {
        console.log('Car2 was: ' + car.id);
      }
    });
    //this.getCarsFromBackend(this.props.Cars.activePage, this.props.Cars.pageSize);
  }

  handlePriorityDown(priority1, priority2) {
    this.props.Cars.carsArray.forEach((car) => {
      if(car.priority === priority1) {
        console.log('Car1 was: ' + car.id);
      }
      if(car.priority === priority2) {
        console.log('Car2 was: ' + car.id);
      }
    });
    //this.getCarsFromBackend(this.props.Cars.activePage, this.props.Cars.pageSize);
  }

  render() {
    console.log(this.props.Cars.carsArray);
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Priority</th>
                  <th className="text-right">Priority</th>
                </tr>
              </thead>
              <tbody>
                {this.props.Cars.carsArray.map((car) => (
                  <tr key={ car.id }>
                    <td>{car.name}</td>
                    <td>{car.id}</td>
                    <td>{car.priority}</td>
                    <td className="text-right">
                      <ButtonGroup>
                        <Button onClick={ () => this.handlePriorityUp(car.priority, parseInt(car.priority)-1) }><Glyphicon glyph="menu-up"/></Button>
                        <Button onClick={ () => this.handlePriorityDown(car.priority, parseInt(car.priority)+1) } id={ car.id }><Glyphicon glyph="menu-down"/></Button>
                      </ButtonGroup>
                    </td>
                  </tr>
              ))}
              </tbody>
            </Table>
            <div className="text-center">
              <Pagination prev next last first items={ this.props.Cars.numPages } activePage={ this.props.Cars.activePage } maxButtons={ 5 } onSelect={ this.handlePagination }/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Cars: state.Cars
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateDataAction: (refuelsArray) => {
      dispatch(UpdateDataAction(refuelsArray));
    },
    UpdatePaginationAction: (numPages, activePage) => {
      dispatch(UpdatePaginationAction(numPages, activePage));
    }
  };
};

CarsView.propTypes = {
  Cars: PropTypes.object.isRequired,
  UpdateDataAction: PropTypes.func.isRequired,
  UpdatePaginationAction: PropTypes.func.isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(CarsView);