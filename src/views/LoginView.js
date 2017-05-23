import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import {Form, FormGroup, InputGroup, Glyphicon, FormControl, Button} from 'react-bootstrap';
import auth from '../auth';

export default class LoginView extends Component {
  constructor(props) {
    console.log('Login::constructor');
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    auth.login(this.state.username, this.state.password);
  }

  handleOnChange(e) {
    let next = this.state;
    next[e.target.name] = e.target.value;
    this.setState(next);
  }

  render() {
    console.log('LoginView::render');
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="Cardiary" bsStyle="primary" style={ {marginTop: 60} }>
              <Form>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                    <FormControl onChange={ this.handleOnChange } type="text" name="username" placeholder="Username"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                    <FormControl onChange={ this.handleOnChange } type="password" name="password" placeholder="Password"/>
                  </InputGroup>
                </FormGroup>
                <Button onClick={ this.handleSubmit } type="submit" bsStyle="default" block>Login</Button>
              </Form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
