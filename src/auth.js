import axios from './axios_config';

class Auth {
  login() {
    console.log('Auth.login() called');

    axios.post('/api-token-auth/', {
      username: 'admin',
      password: 'admin'
    })
    .then(response => {
      let token = response.data.token;
      console.log(token);
      localStorage.setItem('jwt_token', token);
      axios.get('/my-cars/', {
      }).then(response => {
        console.log(response.data);
      })
      .catch(response => {
        console.log(response);
        localStorage.removeItem('jwt_token');
      });
    })
    .catch(function (error) {
      console.log(error);
      localStorage.removeItem('jwt_token');
    });
  }

  logout() {
    console.log('Auth.logout() called');
    localStorage.removeItem('jwt_token');
  }

  loggedIn() {
    console.log('Auth.loggedIn() called');
  }
}

export default new Auth();
