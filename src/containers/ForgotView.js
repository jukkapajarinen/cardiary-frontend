import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {FormGroup, InputGroup, Glyphicon, FormControl, Button} from 'react-bootstrap';
import axios from '../axios_config';

class ForgotView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/api-token/password/reset/',
      data: {'email': e.target.email.value}
    })
    .then(() => this.context.router.history.push('/'))
    .catch(() => this.context.router.history.push('/'));
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Cardiary" bsStyle="primary" style={ {marginTop: 60} }>
              <form onSubmit={ this.handleSubmit }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                    <FormControl autoFocus type="email" name="email" placeholder="Email"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="default" block>Send password reset email</Button>
                </FormGroup>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ForgotView.contextTypes = {
  router: PropTypes.object
};

export default ForgotView;
