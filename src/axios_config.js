import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_REST_API_BASE_URL;
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('jwt_token');
  if (token != null) {
    let prefix = process.env.REACT_APP_AUTHORIZATION_HEADER_PREFIX;
    config['headers'] = {...config['headers'], 'Authorization': prefix + ' ' + token};
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios;
