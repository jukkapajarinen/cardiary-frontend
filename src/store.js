import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Session from './reducers/SessionReducer';
import Settings from './reducers/SettingsReducer';
import AddRefuel from './reducers/AddRefuelReducer';

export default createStore(
    combineReducers({
      Session,
      Settings,
      AddRefuel
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);
