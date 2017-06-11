import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export default class AboutView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Panel header="About this software">
              <p>The purpose of the application is to provide the user with the opportunity to <strong>manage the travel log of their car costs, such as fuel consumption, fuel price and mileage</strong></p>
              <p>User can view totals expenses and visualization, manage refuels, manager cars and modify user settings and profile information.</p>
              <p>The project is co-produced by two Finnish Software Engineers and being fully <strong>open-sourced</strong> from the beginning. (<a href="https://opensource.org/licenses/MIT">MIT License</a>)</p>
              <ul>
                <li><a href="https://bitbucket.org/jukkapajarinen/">Jukka Pajarinen</a> <i>(front-end)</i></li>
                <li><a href="https://bitbucket.org/Kazooiebombchu/">Kazooiebombchu</a> <i>(back-end)</i></li>
              </ul>
              <p><strong>Check out the source-code from Bitbucket.</strong></p>
              <ul>
                <li><a href="https://bitbucket.org/jukkapajarinen/cardiary-frontend">cardiary-frontend</a></li>
                <li><a href="https://bitbucket.org/Kazooiebombchu/cardiary-backend">cardiary-backend</a></li>
              </ul>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}