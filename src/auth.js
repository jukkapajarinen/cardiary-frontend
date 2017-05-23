//import axios from "axios";

class Auth {
  login(username, password) {
    console.log('Auth.login() called');

    /*let instance = axios.create({
      baseURL: 'https://builds.asmeco.fi/cardiary/api/',
      timeout: 1000,
      headers: {'Access-Control-Allow-Origin': "*"}
    });

    instance.post('/api-token-auth/', {
      username: 'admin',
      password: 'admin'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/

    if(username === 'admin' || password === 'admin') {
      console.log('credentials are ok');
    }
  }

  logout() {
    console.log('Auth.logout() called');
  }

  loggedIn() {
    console.log('Auth.loggedIn() called');
  }
}

export default new Auth();