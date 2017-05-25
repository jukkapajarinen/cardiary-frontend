import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import axios from '../axios_config';
import {updateSettings as UpdateSettingsAction} from '../actions/SettingsActions';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    axios({
      method: 'get',
      url: '/my-options/'
    })
    .then(response => {
      this.props.UpdateSettingsAction(
        response.data.consumption_unit,
        response.data.currency_unit,
        response.data.volume_unit,
        response.data.distance_unit
      );
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'put',
      url: '/my-options/',
      data: {
        'consumption_unit': e.target.consumptionUnit.value,
        'currency_unit': e.target.currencyUnit.value,
        'volume_unit': e.target.volumeUnit.value,
        'distance_unit': e.target.distanceUnit.value
      }
    });
  }

  handleOnChange(e) {
    e.preventDefault();
    let next = this.props.settings;
    next[e.target.name] = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
    this.props.UpdateSettingsAction(
      next.consumptionUnit,
      next.currencyUnit,
      next.volumeUnit,
      next.distanceUnit
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={ 12 }>
            <Panel header="General settings">
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <ControlLabel>Consumption unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose consumption unit" name="consumptionUnit" value={ this.props.settings.consumptionUnit }>
                    <option key={ 1 } value="l/100km">l/100km</option>
                    <option key={ 2 } value="mpg(US)">mpg(US)</option>
                    <option key={ 3 } value="mpg(Imp.)">mpg(Imp.)</option>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Currency</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } type="text" placeholder="€" name="currencyUnit" value={ this.props.settings.currencyUnit }/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Volume unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose volume unit" name="volumeUnit" value={ this.props.settings.volumeUnit }>
                    <option key={ 1 } value="l">l</option>
                    <option key={ 2 } value="us_gal">us_gal</option>
                    <option key={ 3 } value="imp_gal">imp_gal</option>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Distance unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose distance unit" name="distanceUnit" value={ this.props.settings.distanceUnit }>
                    <option key={ 1 } value="km">km</option>
                    <option key={ 2 } value="mi">mi</option>
                  </FormControl>
                </FormGroup>
                <Button type="submit" bsStyle="success" block>Save Settings</Button>
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
    settings: state.settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateSettingsAction: (consumptionUnit, currencyUnit, volumeUnit, distanceUnit) => {
      dispatch(UpdateSettingsAction(consumptionUnit, currencyUnit, volumeUnit, distanceUnit));
    }
  };
};

SettingsView.propTypes = {
  UpdateSettingsAction: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);