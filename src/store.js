import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Session from './reducers/SessionReducer';
import Settings from './reducers/SettingsReducer';
import AddRefuel from './reducers/AddRefuelReducer';
import Refuels from './reducers/RefuelsReducer';
import Profile from './reducers/ProfileReducer';
import Dashboard from './reducers/DashboardReducer';
import Cars from './reducers/CarsReducer';
import AddCar from './reducers/AddCarReducer';

export default createStore(
    combineReducers({
      Session,
      Settings,
      AddRefuel,
      Refuels,
      Profile,
      Dashboard,
      Cars,
      AddCar
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);
