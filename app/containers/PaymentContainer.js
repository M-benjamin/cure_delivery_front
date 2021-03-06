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
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert
} from "react-native";
import { CheckBox } from "react-native-elements";
import { RadioButtons } from "react-native-radio-buttons";
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input"; // 0.3.3
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../assets/styles/colors";

const USE_LITE_CREDIT_CARD_INPUT = false;

export default class PaymentContainer extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "PAYMENT",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="credit-card" size={22} color={tintColor} />
    )
  };

  _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  buyHandler = () => {
    Alert.alert(
      "Payment",
      "your purchase has been successfully completed, a delivery man will bring you your order in 10 min",
      [
        {
          text: "Ok",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
        // {
        //   text: "OK",
        //   onPress: () => this.props.navigation.navigate("Final")
        // }
      ],
      { cancelable: false }
    );
  };

  state = {
    selectedOption: "PAR VÉLO",
    checkedvelo: false,
    checkedpost: false
  };

  render() {
    const options = ["PAR VÉLO ", "PAR POSTE"];

    function setSelectedOption(selectedOption) {
      this.setState({ selectedOption });
    }

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? { fontWeight: "bold" } : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <ScrollView style={s.container}>
        {USE_LITE_CREDIT_CARD_INPUT ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        ) : (
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            labelStyle={s.label}
            style={s.CreditCardInput}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        )}
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            marginLeft: 10
          }}
        >
          Please, choose how do you want to be book ?
        </Text>

        <CheckBox
          title="By bike"
          checked={this.state.checkedvelo}
          onPress={() =>
            this.setState({
              checkedvelo: !this.state.checkedvelo,
              checkedpost: false
            })
          }
        />

        <CheckBox
          title="by post"
          checked={this.state.checkedpost}
          onPress={() =>
            this.setState({
              checkedpost: !this.state.checkedpost,
              checkedvelo: false
            })
          }
        />

        <View style={s.footer}>
          <TouchableHighlight
            onPress={this.buyHandler}
            style={s.findHomesButton}
          >
            <Text style={s.findHomesButtonText}>Buy</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
    // marginTop: 60
  },
  text: {
    marginTop: 60
  },
  label: {
    color: "black",
    fontSize: 12
  },
  input: {
    fontSize: 16,
    color: "black"
  },
  footer: {
    position: "absolute",
    top: 550,
    width: "100%",
    height: 80,
    // bottom: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray05,
    paddingLeft: 20,
    paddingRight: 20
  },
  findHomesButton: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: colors.pink
  },
  findHomesButtonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600"
  }
});
