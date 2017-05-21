import axios from "axios";

class Auth {
  login(username, password) {
    console.log("Auth.login() called");

    axios.post('https://builds.asmeco.fi/cardiary/api/api-token-auth/', {
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  logout() {
    console.log("Auth.logout() called");
  }

  loggedIn() {
    console.log("Auth.loggedIn() called");
  }
}

export default new Auth();