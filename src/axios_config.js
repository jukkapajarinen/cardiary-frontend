import axios from 'axios';

// Set base url.
axios.defaults.baseURL = 'https://builds.asmeco.fi/cardiary/api';

// Add own interceptor to add Authorization header when jtw token is available.
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('jwt_token');
  if (token != null) {
    console.log(config);
    config['headers'] = {...config['headers'], 'Authorization': 'jwt ' + token};
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios;
