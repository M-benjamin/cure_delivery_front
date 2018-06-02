import { createStore, compose, applyMiddleware } from "redux";
import AppReducer from "../reducers";
import { AsyncStorage } from "react-native";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor
} from "react-navigation-redux-helpers";

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export const navigationPropConstructor = createNavigationPropConstructor(
  "root"
);

const persistedReducer = persistReducer(persistConfig, AppReducer);

export function configureStore(initialState) {
  // > for middleware integration
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, navigationMiddleware, loggerMiddleware)
  );

  let store = createStore(persistedReducer, initialState, enhancer);

  let persistor = persistStore(store);

  return {
    store,
    persistor
  };
}
