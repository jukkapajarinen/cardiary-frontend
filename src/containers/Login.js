import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Panel } from "react-bootstrap";
import { Form, FormGroup, InputGroup, Addon, Glyphicon, FormControl, Button } from "react-bootstrap";

class Login extends Component  {

    constructor(props){
        console.log("Login constructor");
        super(props);
    }

    render() {
        console.log("Login render");
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Panel header="Cardiary" style={{marginTop: 60}}>
                            <Form>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                                        <FormControl type="text" placeholder="Username"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                        <FormControl type="password" placeholder="Password"/>
                                    </InputGroup>
                                </FormGroup>
                                <Button type="submit" bsStyle="primary" block>Login</Button>
                            </Form>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);