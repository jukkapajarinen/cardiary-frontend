import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Session from './reducers/SessionReducer';
import Settings from './reducers/SettingsReducer';
import AddRefuel from './reducers/AddRefuelReducer';
import Refuels from './reducers/RefuelsReducer';

export default createStore(
    combineReducers({
      Session,
      Settings,
      AddRefuel,
      Refuels
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);
