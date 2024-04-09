import { combineReducers } from "redux";
import LoginReducer from "./reducers/LoginReducer";

const allReducers = combineReducers({
  LoginReducer,
});

export default allReducers;
