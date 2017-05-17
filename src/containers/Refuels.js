import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {Table, Pagination} from 'react-bootstrap';

const refuelsData = [
  { date: '11/05/2017', car: 'Toyota Celica', average: '5 l/km', trip: '200 km', price: '1.56 €' },
  { date: '13/09/1991', car: 'Nissan Primera', average: '3 l/km', trip: '102 km', price: '1.32 €' },
  { date: '13/09/1991', car: 'Nissan Primera', average: '3 l/km', trip: '102 km', price: '1.32 €' },
  { date: '13/09/1991', car: 'Nissan Primera', average: '3 l/km', trip: '102 km', price: '1.32 €' },
  { date: '13/09/1991', car: 'Nissan Primera', average: '3 l/km', trip: '102 km', price: '1.32 €' },
  { date: '01/02/2016', car: 'Bugatti Veyron', average: '12 l/km', trip: '96 km', price: '1.27 €' }
];
const refuelsDataPages = 10;

class Refuels extends Component {
  constructor(props) {
    console.log('Refuels constructor');
    super(props);
  }

  handlePagination(eventKey) {
    console.log(eventKey);
  }

  render() {
    console.log('Refuels render');
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Table striped>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Car</th>
                  <th>Average</th>
                  <th>Trip</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {refuelsData.map((refill, i) => (
                  <tr key={ i }>
                    <td>{refill.date}</td>
                    <td>{refill.car}</td>
                    <td>{refill.average}</td>
                    <td>{refill.trip}</td>
                    <td>{refill.price}</td>
                  </tr>
              ))}
              </tbody>
            </Table>
            <Pagination prev next last first boundaryLinks items={ refuelsDataPages } maxButtons={ 3 } onSelect={ this.handlePagination }/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Refuels);
