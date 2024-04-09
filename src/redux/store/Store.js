import { configureStore } from "@reduxjs/toolkit";

import allReducers from "../Index";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
