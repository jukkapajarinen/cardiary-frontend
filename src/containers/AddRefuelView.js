import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, FormControl, Button, Alert} from 'react-bootstrap';
import axios from '../axios_config';
import {updateCars as UpdateCarsAction} from '../actions/AddRefuelActions';
import {updateForm as UpdateFormAction} from '../actions/AddRefuelActions';

class AddRefuelView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {alertVisible: false};
    axios({
      method: 'get',
      url: '/my-cars/'
    })
    .then(response => {
      this.props.UpdateCarsAction(response.data.results);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/my-refuels/',
      data: {
        'car': e.target.car.value,
        'date': e.target.date.value,
        'distance': e.target.distance.value.replace(',', '.'),
        'volume': e.target.volume.value.replace(',', '.'),
        'price': e.target.price.value.replace(',', '.'),
        'notes': e.target.notes.value
      }
    })
    .then(() => this.setState({alertVisible: true}))
    .catch(() => {});
  }

  handleOnChange(e) {
    e.preventDefault();
    let next = this.props.AddRefuel;
    next[e.target.name] = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
    this.props.UpdateFormAction(next.car, next.date, next.distance, next.volume, next.price, next.notes);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Enter refuel details">
              {this.state.alertVisible ?
                <Alert bsStyle="success" onDismiss={ () => this.setState({alertVisible: false}) }>
                  <strong>Well done: </strong> Added new refuel successfully.
                </Alert> : null}
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose a car" name="car" value={ this.props.AddRefuel.car }>
                    {this.props.AddRefuel.carsArray.map((car, i) => (
                      <option key={ i } value={ car.id }>{car.name}</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="date" placeholder="dd/mm/yyyy" name="date" value={ this.props.AddRefuel.date } />
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="number" placeholder={ 'Distance (' + this.props.Settings.distanceUnit + ')' } name="distance" value={ this.props.AddRefuel.distance } />
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="number" placeholder={ 'Volume (' + this.props.Settings.volumeUnit + ')' } name="volume" value={ this.props.AddRefuel.volume } />
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="number" placeholder={ 'Price (' + this.props.Settings.currencyUnit + ')' } name="price" value={ this.props.AddRefuel.price } />
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } componentClass="textarea" placeholder="Notes (optional)" style={ {resize: 'none'} } name="notes" value={ this.props.AddRefuel.notes }/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" block>Add a Refuel</Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    AddRefuel: state.AddRefuel,
    Settings: state.Settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateCarsAction: (carsObject) => {
      dispatch(UpdateCarsAction(carsObject));
    },
    UpdateFormAction: (date, distance, volume, price, notes) => {
      dispatch(UpdateFormAction(date, distance, volume, price, notes));
    }
  };
};

AddRefuelView.propTypes = {
  UpdateCarsAction: PropTypes.func.isRequired,
  UpdateFormAction: PropTypes.func.isRequired,
  AddRefuel: PropTypes.object.isRequired,
  Settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRefuelView);
