import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, InputGroup, Glyphicon, FormControl, Button} from 'react-bootstrap';
import {LoginAction} from '../actions/LoginActions';
import axios from '../axios_config';

class LoginView extends Component {
  constructor(props) {
    console.log('LoginView::constructor');
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    axios.post('/api-token-auth/', {
      username: username,
      password: password
    })
    .then(response => {
      let token = response.data.token;
      localStorage.setItem('jwt_token', token);
      this.props.LoginAction(username);
    })
    .catch(function () {
      localStorage.removeItem('jwt_token');
    });
  }

  render() {
    console.log('LoginView::render');
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Cardiary" bsStyle="primary" style={ {marginTop: 60} }>
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                    <FormControl type="text" name="username" placeholder="Username"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                    <FormControl type="password" name="password" placeholder="Password"/>
                  </InputGroup>
                </FormGroup>
                <Button type="submit" bsStyle="default" block>Login</Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginAction: (username) => {
      dispatch(LoginAction(username));
    }
  };
};

LoginView.propTypes = {
  LoginAction: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginView);
