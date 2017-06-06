import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Session from './reducers/SessionReducer';
import Settings from './reducers/SettingsReducer';
import AddRefuel from './reducers/AddRefuelReducer';
import Refuels from './reducers/RefuelsReducer';
import Profile from './reducers/ProfileReducer';
import Dashboard from './reducers/DashboardReducer';

export default createStore(
    combineReducers({
      Session,
      Settings,
      AddRefuel,
      Refuels,
      Profile,
      Dashboard
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);
