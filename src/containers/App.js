import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navigation} from '../components/Navigation';
import AboutView from '../views/AboutView';
import NotFoundView from '../views/NotFoundView';
import MainView from '../views/MainView';
import LoginView from '../views/LoginView';
import SettingsView from '../views/SettingsView';
import RefuelsView from '../views/RefuelsView';
import AddRefuelView from '../views/AddRefuelView';
import auth from '../auth';

class App extends Component {
  constructor(props) {
    console.log('App::constructor');
    super(props);
    this.state = {loggedIn: auth.loggedIn()};
  }

  componentWillMount() {
    console.log('App::componentWillMount');
    this.setState({loggedIn: auth.loggedIn()});
  }

  render() {
    console.log('App::render');
    console.log(this.state);
    return (
      <BrowserRouter>
        <div>
          {this.state.loggedIn ? <Navigation/> : <span/>}
          <Switch>
            <Route exact path="/" render={ () => this.state.loggedIn ? <MainView/> : <LoginView/> }/>
            <Route exact path="/refuels" render={ () => this.state.loggedIn ? <RefuelsView/> : <LoginView/> }/>
            <Route exact path="/addrefuel" render={ () => this.state.loggedIn ? <AddRefuelView/> : <LoginView/> }/>
            <Route path="/about" render={ () => this.state.loggedIn ? <AboutView/> : <LoginView/> }/>
            <Route path="/settings" render={ () => this.state.loggedIn ? <SettingsView/> : <LoginView/> }/>
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

  };
};

export default connect(mapStateToProps, null)(App);
