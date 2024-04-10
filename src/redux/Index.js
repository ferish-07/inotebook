import { combineReducers } from "redux";
import LoginReducer from "./reducers/LoginReducer";
import NotesReducer from "./reducers/NotesReducer";

const allReducers = combineReducers({
  LoginReducer,
  NotesReducer,
});

export default allReducers;
