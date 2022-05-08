import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  logger  from "redux-logger";
import thunk  from "redux-thunk";

//* Reducers
import combinedReducers from "./combineReducers";

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
