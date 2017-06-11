import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, FormControl, Button, Alert} from 'react-bootstrap';
import axios from '../axios_config';
import {updateForm as UpdateFormAction} from '../actions/AddCarActions';

class AddCarView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {alertVisible: false, alertType: 'success'};
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/my-cars/',
      data: {
        'name': e.target.carName.value,
        'priority': Math.round(e.target.carPriority.value),
      }
    })
    .then(() => this.setState({alertVisible: true, alertType: 'success'}))
    .catch(() => this.setState({alertVisible: true, alertType: 'danger'}));
  }

  handleOnChange(e) {
    e.preventDefault();
    let next = this.props.AddCar;
    next[e.target.name] = e.target.value;
    this.props.UpdateFormAction(next.name, next.priority);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Enter car details">
              {this.state.alertVisible ?
                <Alert bsStyle={this.state.alertType} onDismiss={ () => this.setState({alertVisible: false, alertType: 'success'}) }>
                  {this.state.alertType === 'success' ? <span><strong>Well done: </strong> Added new car successfully.</span> :
                    <span><strong>Oh Snap:</strong> Priority is already in use. Please enter next priority.</span>}
                </Alert> : null}
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="text" placeholder="e.g. Nissan Primera"
                               name="carName" value={ this.props.AddCar.name }/>
                </FormGroup>
                <FormGroup>
                  <FormControl onChange={ this.handleOnChange } type="number" placeholder='e.g. 9' name="carPriority"
                               value={ this.props.AddCar.distance }/>
                </FormGroup>
                <Button type="submit" bsStyle="primary" block>Add a Car</Button>
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
    AddCar: state.AddCar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateFormAction: (carName, carPriority) => {
      dispatch(UpdateFormAction(carName, carPriority));
    }
  };
};

AddCarView.propTypes = {
  UpdateFormAction: PropTypes.func.isRequired,
  AddCar: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCarView);
