import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

import { StackNavigator } from "react-navigation";

export class CardShop extends React.Component {
  render() {
    return (
      <View>
        <Text>CardShop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20
  },
  ButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#808080",
    // borderWidth: .5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5
  }
});
