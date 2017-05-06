import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

export const About = (props) =>  {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <PageHeader>About page</PageHeader>
                </Col>
                <Col xs={12}>
                    <p>This is about page</p>
                </Col>
            </Row>
        </Grid>
    );
}
