import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import {Table, Pagination} from 'react-bootstrap';
import axios from '../axios_config';
import {updateData as UpdateDataAction} from '../actions/RefuelsActions';

class RefuelsView extends Component {
  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
    axios({
      method: 'get',
      url: '/my-refuels/'
    })
    .then(response => {
      this.props.UpdateDataAction(response.data.results, 10, 1);
    });
  }

  handlePagination(eventKey) {
    console.log(eventKey);
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
                    <td>{refuel.car}</td>
                    <td>{refuel.distance}</td>
                    <td>{refuel.volume}</td>
                    <td>{refuel.price}</td>
                  </tr>
              ))}
              </tbody>
            </Table>
            <div className="text-center">
              <Pagination prev next last first boundaryLinks items={ this.props.Refuels.pages } maxButtons={ 3 } onSelect={ this.handlePagination }/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Refuels: state.Refuels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateDataAction: (refuelsArray, currentPage) => {
      dispatch(UpdateDataAction(refuelsArray, currentPage));
    }
  };
};

RefuelsView.propTypes = {
  Refuels: PropTypes.object.isRequired,
  UpdateDataAction: PropTypes.func.isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(RefuelsView);