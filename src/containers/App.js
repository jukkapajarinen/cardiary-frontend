import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import AboutView from '../views/AboutView';
import NotFoundView from '../views/NotFoundView';
import MainView from '../views/MainView';
import LoginView from '../views/LoginView';
import SettingsView from '../views/SettingsView';
import RefuelsView from '../views/RefuelsView';
import AddRefuelView from '../views/AddRefuelView';

class App extends Component {
  constructor(props) {
    console.log('App::constructor');
    super(props);
  }

  componentWillMount() {
    console.log('App::componentWillMount');
  }

  render() {
    console.log('App::render');
    console.log(this.props);
    return (
      <BrowserRouter>
        <div>
          {this.props.login.loggedIn ? <Navigation/> : <span/>}
          <Switch>
            <Route exact path="/" render={ () => this.props.login.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route exact path="/refuels" render={ () => this.props.login.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route exact path="/addrefuel" render={ () => this.props.login.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
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
  console.log(state);
  return {
    login: state.login
  };
};

App.propTypes = {
  login: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(App);
