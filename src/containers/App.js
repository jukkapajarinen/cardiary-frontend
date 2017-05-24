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
  constructor(props) {
    console.log('App::constructor');
    super(props);
  }

  render() {
    console.log('App::render');
    return (
      <BrowserRouter>
        <div>
          {this.props.login.loggedIn ? <Navigation/> : null}
          <Switch>
            <Route exact path="/" render={ () => this.props.login.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/home" render={ () => this.props.login.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route path="/refuels" render={ () => this.props.login.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route path="/addrefuel" render={ () => this.props.login.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path="/about" render={ () => this.props.login.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path="/settings" render={ () => this.props.login.loggedIn ? <SettingsView/> : <LoginView/> }/>
            <Route render={ () => <NotFoundView/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

App.propTypes = {
  login: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(App);
