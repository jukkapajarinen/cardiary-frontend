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
import ProfileView from './ProfileView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.Session.loggedIn ? <Navigation/> : null}
          <Switch>
            <Route exact path="/" render={ () => this.props.Session.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/home" render={ () => this.props.Session.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/refuels" render={ () => this.props.Session.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route path="/addrefuel" render={ () => this.props.Session.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path="/about" render={ () => this.props.Session.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path="/settings" render={ () => this.props.Session.loggedIn ? <SettingsView/> : <LoginView/> }/>
            <Route path="/profile" render={ () => this.props.Session.loggedIn ? <ProfileView/> : <LoginView/> }/>
            <Route render={ () => <NotFoundView/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Session: state.Session
  };
};

App.propTypes = {
  Session: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(App);
