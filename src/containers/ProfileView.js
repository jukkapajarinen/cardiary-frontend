import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    //TODO: axios - post form
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={ 12 }>
            <Panel header="User profile">
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl type="text" placeholder="Username" name="username" value={this.props.Profile.username} disabled/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl type="email" placeholder="Enter your email" name="email" value={this.props.Profile.email}/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Current password</ControlLabel>
                  <FormControl type="password" placeholder="Enter your current password" name="currentPassword"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>New password</ControlLabel>
                  <FormControl type="password" placeholder="Enter your new password" name="newPassword"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Verify password</ControlLabel>
                  <FormControl type="password" placeholder="Verify your new password" name="verifyPassword"/>
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