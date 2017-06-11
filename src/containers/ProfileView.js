import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel, Alert} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import axios from '../axios_config';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {alertVisible: false, alertType: 'success'};
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.newPassword.value === this.verifyPassword.value) {
      axios({
        method: 'post',
        url: '/api-token/password/',
        data: {
          'new_password': this.newPassword.value,
          're_new_password': this.verifyPassword.value,
          'current_password': this.currentPassword.value
        }
      })
      .then(() => this.setState({alertVisible: true, alertType: 'success'}))
      .catch(() => {});
    } else {
      this.setState({alertVisible: true, alertType: 'danger'});
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={ 12 }>
            <Panel header="User profile">
              {this.state.alertVisible ?
              <Alert bsStyle={this.state.alertType} onDismiss={ () => this.setState({alertVisible: false, alertType: 'success'}) }>
                {this.state.alertType === 'success' ? <span><strong>Well done: </strong> Changed password successfully.</span> :
                  <span><strong>Oh Snap:</strong> Passwords don't match.</span>}
              </Alert> : null}
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl type="text" placeholder="Username" name="username" value={ this.props.Profile.username } disabled/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="email" placeholder="Enter your email" name="email" value={ this.props.Profile.email } disabled/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Current password</ControlLabel>
                  <FormControl inputRef={(input) => {this.currentPassword = input;}} type="password" placeholder='Current password' name="currentPassword"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>New password</ControlLabel>
                  <FormControl inputRef={(input) => {this.newPassword = input;}} type="password" placeholder="New password" name="newPassword"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Re-type password</ControlLabel>
                  <FormControl inputRef={(input) => {this.verifyPassword = input;}} type="password" placeholder="Re-type password" name="verifyPassword"/>
                </FormGroup>
                <Button type="submit" bsStyle="success" block>Update profile</Button>
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
    Profile: state.Profile
  };
};

ProfileView.propTypes = {
  Profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(ProfileView);