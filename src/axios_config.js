import axios from 'axios';

axios.defaults.baseURL = 'https://builds.asmeco.fi/cardiary/api';
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('jwt_token');
  if (token != null) {
    config['headers'] = {...config['headers'], 'Authorization': 'jwt ' + token};
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios;
