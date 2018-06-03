import { combineReducers } from "redux";

import authReducer from "./authReducer";
import nav from "./navigation";

const AppReducer = combineReducers({
  nav,
  auth: authReducer
});
