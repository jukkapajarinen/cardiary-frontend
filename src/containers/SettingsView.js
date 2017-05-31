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
    this.state = {'consumptionUnitOptions': [],'distanceUnitOptions': [],'volumeUnitOptions': []}
    axios({
      method: 'options',
      url: '/my-options/'
    })
    .then(response => {
      this.setState({...this.state, 'consumptionUnitOptions': response.data.actions.PUT.consumption_unit.choices});
      this.setState({...this.state, 'distanceUnitOptions': response.data.actions.PUT.distance_unit.choices});
      this.setState({...this.state, 'volumeUnitOptions': response.data.actions.PUT.volume_unit.choices});
      console.log('sdda');
    });
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
    let next = this.props.Settings;
    next[e.target.name] = e.target.type === 'select-one' ? e.target.options[e.target.selectedIndex].value : e.target.value;
    this.props.UpdateSettingsAction(
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
                    {this.state.consumptionUnitOptions.map((consumptionUnit, id) => (
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
                    {this.state.volumeUnitOptions.map((volumeUnit, id) => (
                      <option key={ id } value={volumeUnit.value}>{volumeUnit.display_name}</option>
                    ))}
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Distance unit</ControlLabel>
                  <FormControl onChange={ this.handleOnChange } componentClass="select" placeholder="Choose distance unit" name="distanceUnit" value={ this.props.Settings.distanceUnit }>
                    {this.state.distanceUnitOptions.map((distanceUnit, id) => (
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
    UpdateSettingsAction: (consumptionUnit, currencyUnit, volumeUnit, distanceUnit) => {
      dispatch(UpdateSettingsAction(consumptionUnit, currencyUnit, volumeUnit, distanceUnit));
    }
  };
};

SettingsView.propTypes = {
  UpdateSettingsAction: PropTypes.func.isRequired,
  Settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);