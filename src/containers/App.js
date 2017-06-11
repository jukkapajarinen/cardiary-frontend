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
            <Route exact path={ process.env.REACT_APP_PATH_PREFIX + '/' } render={ () => this.props.Session.loggedIn ? <DashboardView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/refuels' } render={ () => this.props.Session.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/addrefuel' } render={ () => this.props.Session.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/cars' } render={ () => this.props.Session.loggedIn ? <CarsView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/addcar' } render={ () => this.props.Session.loggedIn ? <AddCarView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/about' } render={ () => this.props.Session.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/settings' } render={ () => this.props.Session.loggedIn ? <SettingsView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/profile' } render={ () => this.props.Session.loggedIn ? <ProfileView/> : <LoginView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/forgot' } render={ () => this.props.Session.loggedIn ? <NotFoundView/> : <ForgotView/> }/>
            <Route path={ process.env.REACT_APP_PATH_PREFIX + '/passwordreset' } render={ () => this.props.Session.loggedIn ? <NotFoundView/> : <ResetPasswordView/> }/>
            <Route render={ () => this.props.Session.loggedIn ? <NotFoundView/> : <LoginView/> }/>
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
