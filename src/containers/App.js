import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navigation} from '../components/Navigation';
import {About} from '../components/About';
import {NotFound} from '../components/NotFound';
import Main from './Main';
import Login from '../components/Login';
import Settings from './Settings';
import Refuels from './Refuels';
import Addrefuel from './Addrefuel';
import auth from '../auth';

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {loggedIn: auth.loggedIn()};
  }

  componentWillMount() {
    console.log("App Component will mount");
    this.setState({loggedIn: auth.loggedIn()});
  }

  render() {
    console.log('App render');
    console.log(this.state);
    return (
      <BrowserRouter>
        <div>
          {this.state.loggedIn ? <Navigation/> : <span/>}
          <Switch>
            <Route exact path="/" render={ () => this.state.loggedIn ? <Main/> : <Login/> }/>
            <Route exact path="/refuels" render={ () => this.state.loggedIn ? <Refuels/> : <Login/> }/>
            <Route exact path="/addrefuel" render={ () => this.state.loggedIn ? <Addrefuel/> : <Login/> }/>
            <Route path="/about" render={ () => this.state.loggedIn ? <About/> : <Login/> }/>
            <Route path="/settings" render={ () => this.state.loggedIn ? <Settings/> : <Login/> }/>
            <Route render={ () => <NotFound/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
