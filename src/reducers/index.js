import {combineReducers} from "redux";
import LoginReducer from "./_loginReducer";

const RootReducer = combineReducers(
  {
    auth: LoginReducer,
  }
);
export default RootReducer;