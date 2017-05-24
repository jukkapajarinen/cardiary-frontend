import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

const carsData = [
  {id: 1, name: 'Toyota Celica'},
  {id: 2, name: 'Nissan Primera'},
  {id: 3, name: 'Bugatti Veyron'},
  {id: 4, name: 'Lamborghini Gallardo'},
  {id: 5, name: 'Lada Samara'}
];

export default class AddRefuelView extends Component {
  render() {
    console.log('AddRefuelView::render');
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Enter refuel details">
              <Form>
                <FormGroup>
                  <FormControl componentClass="select" placeholder="Choose a car">
                    {carsData.map((car, i) => (
                      <option key={ i } value={ car.id }>{car.name}</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormControl type="date" placeholder="dd/mm/yyyy"/>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col xs={ 6 }>
                      <FormControl type="number" placeholder="Full mileage (km)"/>
                    </Col>
                    <Col xs={ 6 }>
                      <FormControl type="number" placeholder="Trip mileage (km)"/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col xs={ 6 }>
                      <FormControl type="number" placeholder="Gas price (€)"/>
                    </Col>
                    <Col xs={ 6 }>
                      <FormControl type="number" placeholder="Full price (€)"/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <FormControl type="number" placeholder="Amount (liters)"/>
                </FormGroup>
                <FormGroup>
                  <FormControl type="text" placeholder="Units (l/100 km)"/>
                </FormGroup>
                <FormGroup>
                  <FormControl componentClass="textarea" placeholder="Comments (optional)" style={ {resize: 'none'} }/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" block>Add a Refuel</Button>
              </Form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
