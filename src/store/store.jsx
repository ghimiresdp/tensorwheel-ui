import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import RootReducer from "../reducers";

const loggerMiddleware = createLogger();

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
const composeEnhancers =
  typeof window === "object" &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

const initialState = {};
const middleWare = [thunk];
const store = createStore(
  RootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare, loggerMiddleware))
);

export default store;
