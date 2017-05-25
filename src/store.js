import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import session from './reducers/SessionReducer';
import settings from './reducers/SettingsReducer';

export default createStore(
    combineReducers({
      session,
      settings
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);
