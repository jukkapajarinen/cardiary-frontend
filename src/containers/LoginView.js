import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, InputGroup, Glyphicon, FormControl, Button, Alert} from 'react-bootstrap';
import {login as SessionLoginAction} from '../actions/SessionActions';
import axios from '../axios_config';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {alertVisible: false};
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/api-token/auth/',
      data: {
        'username': e.target.username.value,
        'password': e.target.password.value
      }
    })
    .then(response => {
      let token = response.data.token;
      this.props.SessionLoginAction(token);
    })
    .catch(() => {
      localStorage.removeItem('jwt_token');
      this.setState( {alertVisible: true} );
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Cardiary" bsStyle="primary" style={ {marginTop: 60} }>
              {this.state.alertVisible ?
                <Alert bsStyle="danger" onDismiss={() => this.setState({alertVisible: false})}>
                  <strong>Oh Snap:</strong> Incorrect login credentials.
                </Alert> : null}
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                    <FormControl autoFocus type="text" name="username" placeholder="Username" inputRef={ autofocus => {this.input = autofocus;} }/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                    <FormControl type="password" name="password" placeholder="Password"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Link to="/forgot">Forgot your password?</Link>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="default" block>Login</Button>
                </FormGroup>
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
    SessionLoginAction: (token, username) => {
      dispatch(SessionLoginAction(token, username));
    }
  };
};

LoginView.propTypes = {
  SessionLoginAction: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginView);
