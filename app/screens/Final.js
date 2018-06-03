import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Apple Color Emoji"
  },
  summary: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: "Apple Color Emoji",
    color: "#050505",
    textAlign: "center"
  },
  list: {
    marginTop: 30,
    fontSize: 25,
    textAlign: "center"
  }
});

export default class Final extends Component {
  render() {
    return (
      <View style={s.container}>
        <Image
          // source={require("../assets/img/velo.png")}
          style={{ width: 150, height: 150, marginLeft: 120 }}
        />
        <Text style={s.text}>10 minutes</Text>
        <Text style={s.summary}>the summary of your order :</Text>

        <Text style={s.list}>
          • DOLIPRANE {`\n \n `}
          • FERVEX {`\n \n`}
          • MAALOX
        </Text>
      </View>
    );
  }
}
