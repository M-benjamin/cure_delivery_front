import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
  initializeListeners,
  createReduxBoundAddListener
} from "react-navigation-redux-helpers";
import { navigationPropConstructor } from "../store";

import Home from "../screens/Home";
import SignIn from "../screens/Sign-in";
import MapV from "../screens/map";
import Final from "../screens/Final";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignIn
  },
  MapV: {
    screen: MapV
  }
  // Final: {
  //   screen: Final
  // }
});

class AppNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  componentDidMount() {
    initializeListeners("root", this.props.nav);
  }

  render() {
    const { dispatch, nav } = this.props;
    const navigation = {
      dispatch,
      state: nav,
      addListener: createReduxBoundAddListener("root")
    };
    return <AppNavigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigation);
