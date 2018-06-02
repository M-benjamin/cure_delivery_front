import React, { Component } from "react";
import { transparentHeaderStyle } from "../assets/styles/navigation";
import LoggedInTabNavigator from "../navigators/TabNavigator";

export default class LoggedIn extends Component {
  // static navigationOptions = () => ({
  //   header: null,
  //   gesturesEnabled: false
  // });

  render() {
    return <LoggedInTabNavigator />;
  }
}
