import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import AboutView from '../components/AboutView';
import NotFoundView from '../components/NotFoundView';
import MainView from './MainView';
import LoginView from './LoginView';
import SettingsView from './SettingsView';
import RefuelsView from './RefuelsView';
import AddRefuelView from './AddRefuelView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.session.loggedIn ? <Navigation/> : null}
          <Switch>
            <Route exact path="/" render={ () => this.props.session.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/home" render={ () => this.props.session.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/refuels" render={ () => this.props.session.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route path="/addrefuel" render={ () => this.props.session.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path="/about" render={ () => this.props.session.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path="/settings" render={ () => this.props.session.loggedIn ? <SettingsView/> : <LoginView/> }/>
            <Route render={ () => <NotFoundView/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  };
};

App.propTypes = {
  session: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(App);
