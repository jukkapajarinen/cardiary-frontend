import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import store from './store';
import 'bootswatch/paper/bootstrap.min.css';
import './styles.css';

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('app')
);