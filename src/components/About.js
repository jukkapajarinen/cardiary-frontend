import React from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';

export const About = () => {
  return (
    <Grid>
      <Row>
        <Col xs={ 12 }>
          <Accordion>
            <Panel header="Home" eventKey="1">
              <p>This view shows overall statistics of your driving expenses</p>
            </Panel>
            <Panel header="Refuels" eventKey="2">
              <p>Here you can preview and manage all of your refuels</p>
            </Panel>
            <Panel header="Add Refuel" eventKey="3">
              <p>Here you can add a new refuel</p>
            </Panel>
            <Panel header="About" eventKey="4">
              <p>This view is the current information page about the features</p>
            </Panel>
            <Panel header="Settings" eventKey="5">
              <p>Here you can manage your general and administrative settings</p>
            </Panel>
          </Accordion>
        </Col>
      </Row>
    </Grid>
  );
};
