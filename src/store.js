import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import greetingReducer from "./reducers/greetingReducer";

export default createStore(
    combineReducers({greetings: greetingReducer}),
    {},
    applyMiddleware(createLogger())
);