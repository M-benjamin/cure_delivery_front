import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";
const { persistor, store } = configureStore();
import { PersistGate } from "redux-persist/integration/react";
// import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import AppNavigation from "./app/navigators/AppNavigator";

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
