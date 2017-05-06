import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

class Main extends Component  {

    constructor(props){
        console.log("Main constructor");
        super(props);
    }

    render() {
        console.log("Main render");
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <PageHeader>Main page</PageHeader>
                    </Col>
                    <Col xs={12}>
                        <p>Hello {this.props.greeting}</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.greetings.greeting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);