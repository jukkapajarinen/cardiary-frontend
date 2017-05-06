import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

export const NotFound = (props) =>  {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <PageHeader>Sorry, Page not found.</PageHeader>
                </Col>
            </Row>
        </Grid>
    );
}
