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
import axios from '../axios_config';
import {tokenLogin as SessionTokenLogin} from '../actions/SessionActions';

class App extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('jwt_token') != null) {
      axios({
        method: 'post',
        url: '/api-token/verify/',
        data: {
          'token': localStorage.getItem('jwt_token')
        }
      })
      .then(response => {
        if(localStorage.getItem('jwt_token') === response.data.token) {
          this.props.SessionTokenLogin();
        }
      });
    }
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    SessionTokenLogin: () => {
      dispatch(SessionTokenLogin());
    }
  }
}

App.propTypes = {
  Session: PropTypes.object.isRequired,
  SessionTokenLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
