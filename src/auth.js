//import axios from "axios";
import {login as loginAction, logout as logoutAction} from './actions/LoginActions';

class Auth {
  login(username, password) {
    console.log('Auth::login');
    let authenticateMeWithJwt = true;
    if(authenticateMeWithJwt) {
      console.log('Credentials OK');
      dispatch(loginAction(username));
    }
  }

  logout() {
    console.log('Auth::logout');
    if(this.loggedIn) {
      dispatch(logoutAction(''));
    }
  }

  loggedIn() {
    console.log('Auth::loggedIn')
    let isLoggedIn = true;
    return isLoggedIn;
  }
}

export default new Auth();