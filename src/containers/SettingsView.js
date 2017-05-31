import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import axios from '../axios_config';
import {updateForm as UpdateFormAction} from '../actions/SettingsActions';
import {updateChoices as UpdateChoicesAction} from '../actions/SettingsActions';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    axios({
      method: 'options',
      url: '/my-options/'
    })
    .then(response => {
      this.props.UpdateChoicesAction(
        response.data.actions.PUT.consumption_unit.choices,
        response.data.actions.PUT.volume_unit.choices,
        response.data.actions.PUT.distance_unit.choices
      );
    });
    axios({
      method: 'get',
      url: '/my-options/'
    })
    .then(response => {
      this.props.UpdateFormAction(
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
    let next = this.props.Settings;
    next[e.target.name] = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
    this.props.UpdateFormAction(
      next.consumptionUnit,
      next.currencyUnit,
      next.volumeUnit,
      next.distanceUnit
    );
  }

  render() {
    console.log(this.state);
    return (
      <Grid>
        <Row>
          <Col sm={ 12 }>
            <Panel header="General settings">
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <ControlLabel>Consumption unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose consumption unit" name="consumptionUnit" value={ this.props.Settings.consumptionUnit }>
                    {this.props.Settings.consumptionUnitChoices.map((consumptionUnit, id) => (
                    <option key={ id } value={consumptionUnit.value}>{consumptionUnit.display_name}</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Currency</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } type="text" placeholder="€" name="currencyUnit" value={ this.props.Settings.currencyUnit }/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Volume unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose volume unit" name="volumeUnit" value={ this.props.Settings.volumeUnit }>
                    {this.props.Settings.volumeUnitChoices.map((volumeUnit, id) => (
                      <option key={ id } value={volumeUnit.value}>{volumeUnit.display_name}</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Distance unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose distance unit" name="distanceUnit" value={ this.props.Settings.distanceUnit }>
                    {this.props.Settings.distanceUnitChoices.map((distanceUnit, id) => (
                      <option key={ id } value={distanceUnit.value}>{distanceUnit.display_name}</option>
                    ))}
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
    Settings: state.Settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateFormAction: (consumptionUnit, currencyUnit, volumeUnit, distanceUnit) => {
      dispatch(UpdateFormAction(consumptionUnit, currencyUnit, volumeUnit, distanceUnit));
    },
    UpdateChoicesAction: (consumptionUnitChoices, volumeUnitChoices, distanceUnitChoices) => {
      dispatch(UpdateChoicesAction(consumptionUnitChoices, volumeUnitChoices, distanceUnitChoices));
    }
  };
};

SettingsView.propTypes = {
  UpdateFormAction: PropTypes.func.isRequired,
  UpdateChoicesAction: PropTypes.func.isRequired,
  Settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);