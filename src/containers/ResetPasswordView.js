import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, InputGroup, Glyphicon, FormControl, Button, Alert} from 'react-bootstrap';
import axios from '../axios_config';

class ResetPasswordView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {alertVisible: false};
  }

  handleSubmit(e) {
    e.preventDefault();
    if(e.target.newpassword.value === e.target.renewpassword.value){
      let urlPaths = window.location.pathname.split('/').splice(2, 2);
      axios({
        method: 'post',
        url: '/api-token/password/reset/confirm/',
        data: {
          'uid': urlPaths[0],
          'token': urlPaths[1],
          'new_password': e.target.newpassword.value,
          're_new_password': e.target.renewpassword.value
        }
      })
      .then(() => this.context.router.history.push('/'))
      .catch(() => this.context.router.history.push('/'));
    } else {
      this.setState({alertVisible: true});
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Cardiary" bsStyle="primary" style={ {marginTop: 60} }>
              {this.state.alertVisible ?
                <Alert bsStyle="danger" onDismiss={() => this.setState({alertVisible: false})}>
                  <strong>Oh Snap:</strong> Passwords don{'\''}t match.
                </Alert> : null}
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                    <FormControl autoFocus type="password" name="newpassword" placeholder="New password"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                    <FormControl type="password" name="renewpassword" placeholder="Re-type new password"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="default" block>Reset Password</Button>
                </FormGroup>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ResetPasswordView.contextTypes = {
  router: PropTypes.object
};

export default ResetPasswordView;
