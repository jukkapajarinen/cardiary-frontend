import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const carsData = [
  {id: 1, name: 'Toyota Celica'},
  {id: 2, name: 'Nissan Primera'},
  {id: 3, name: 'Bugatti Veyron'},
  {id: 4, name: 'Lamborghini Gallardo'},
  {id: 5, name: 'Lada Samara'}
];

class SettingsView extends Component {
  constructor(props) {
    console.log('Settings constructor');
    super(props);
  }

  render() {
    console.log('Settings render');
    return (
      <Grid>
        <Row>
          <Col sm={ 12 }>
            <Panel header="General settings">
              <Form>
                <FormGroup>
                  <ControlLabel>Default car</ControlLabel>
                  <FormControl componentClass="select" placeholder="Default car">
                    {carsData.map((car, i) => (
                      <option key={ i } value={ car.id }>{ car.name }</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Volume unit</ControlLabel>
                  <FormControl type="text" placeholder="liters"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Length unit</ControlLabel>
                  <FormControl type="text" placeholder="km"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Currency</ControlLabel>
                  <FormControl type="text" placeholder="€"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Date format</ControlLabel>
                  <FormControl type="text" placeholder="dd/mm/yyyy"/>
                </FormGroup>
                <Button type="submit" bsStyle="success" block>Save Settings</Button>
              </Form>
            </Panel>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
