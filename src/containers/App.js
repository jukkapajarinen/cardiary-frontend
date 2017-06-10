import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import AboutView from '../components/AboutView';
import NotFoundView from '../components/NotFoundView';
import DashboardView from './Dashboard';
import LoginView from './LoginView';
import SettingsView from './SettingsView';
import RefuelsView from './RefuelsView';
import AddRefuelView from './AddRefuelView';
import CarsView from './CarsView';
import AddCarView from './AddCarView';
import ProfileView from './ProfileView';
import ForgotView from './ForgotView';
import ResetPasswordView from './ResetPasswordView';
import axios from '../axios_config';
import {tokenLogin as SessionTokenLogin} from '../actions/SessionActions';
import {updateData as UpdateProfileDataAction} from '../actions/ProfileActions';

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
    if(this.props.Session.loggedIn) {
      axios({
        method: 'get',
        url: '/me/'
      })
      .then(response => {
        this.props.UpdateProfileDataAction(response.data.username, response.data.email);
      });
    }

    return (
      <BrowserRouter>
        <div>
          {this.props.Session.loggedIn ? <Navigation/> : null}
          <Switch>
            <Route path="/" render={ () => this.props.Session.loggedIn ? <DashboardView/> : <LoginView/> }/>
            <Route path="/refuels" render={ () => this.props.Session.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route path="/addrefuel" render={ () => this.props.Session.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path="/cars" render={ () => this.props.Session.loggedIn ? <CarsView/> : <LoginView/> }/>
            <Route path="/addcar" render={ () => this.props.Session.loggedIn ? <AddCarView/> : <LoginView/> }/>
            <Route path="/about" render={ () => this.props.Session.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path="/settings" render={ () => this.props.Session.loggedIn ? <SettingsView/> : <LoginView/> }/>
            <Route path="/profile" render={ () => this.props.Session.loggedIn ? <ProfileView/> : <LoginView/> }/>
            <Route path="/forgot" render={ () => this.props.Session.loggedIn ? <NotFoundView/> : <ForgotView/> }/>
            <Route path="/passwordreset" render={ () => this.props.Session.loggedIn ? <NotFoundView/> : <ResetPasswordView/> }/>
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
    },
    UpdateProfileDataAction: (username, email) => {
      dispatch(UpdateProfileDataAction(username, email));
    }
  };
};

App.propTypes = {
  Session: PropTypes.object.isRequired,
  SessionTokenLogin: PropTypes.func.isRequired,
  UpdateProfileDataAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
