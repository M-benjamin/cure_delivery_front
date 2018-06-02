import createReducer from "./createReducer";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigators/AppNavigator";
import { combineReducers } from "redux";
// import { StatusBar } from "react-native";

// const initialState = {
//   index: 0,
//   key: 'root',
//   routes: [
//     {
//       key: 'home',
//       title: 'Welcome Home'
//     }
//   ]
// }

const firstAction = AppNavigator.router.getActionForPathAndParams("Home");
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
