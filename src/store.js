import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import login from './reducers/LoginReducer';

export default createStore(
    combineReducers({login}),
    {},
    applyMiddleware(createLogger(), thunk)
);
