import { ImagePicker } from "expo";
import React from "react";
import {
  Image,
  Button,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import InputField from "../components/form/InputField";
import colors from "../assets/styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "ORDONNANCE",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="file-text-o" size={22} color={tintColor} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      uri: "http://lorempixel.com/output/cats-h-c-320-640-1.jpg"
    };
    this._setImage = this._setImage.bind(this);
    this._selectPicture = this._selectPicture.bind(this);
    this._takePicture = this._takePicture.bind(this);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text}>
            Please take a picture of your ordonnance :
          </Text>
          <InputField
            labelText="VITAL CARD NUMBER :"
            labelTextSize={14}
            labelColor={colors.white}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="text"
            customStyle={{
              marginBottom: 30,
              marginTop: 30,
              width: 300,
              marginLeft: 10
            }}
            onChangeText={this.handleEmailChange}
            autoFocus={true}
          />
        </View>
        <View>
          <View style={styles.pictureContain}>
            <Image style={styles.picture} source={{ uri: this.state.uri }} />
          </View>
          <Button title="Take Picture" onPress={this._takePicture} />
          <Button title="Select Image" onPress={this._selectPicture} />
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            style={styles.findHomesButton}
            onPress={this.justifHandler}
          >
            <Text style={styles.findHomesButtonText}>Send</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      // <TouchableOpacity onPress={this._takePicture}>
      //       <Image
      //         style={styles.photo}
      //         source={require("../assets/img/photo-cam.png")}
      //       />
      //     </TouchableOpacity>
    );
  }

  justifHandler = () => {
    Alert.alert(
      "Check order",
      "your order has been taken into account a pharmacist will return to you shortly",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("OrderContainer")
        }
      ],
      { cancelable: false }
    );
  };

  /**
   * Select picture from image library
   */
  async _selectPicture() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 5]
    });
    if (!result.cancelled) {
      await this._setImage(result.uri);
    }
  }

  /**
   * Get picture from camera
   */
  async _takePicture() {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 5]
    });
    if (!result.cancelled) {
      await this._setImage(result.uri);
    }
  }

  /**
   * Dispay picture
   * @param {string} uri
   */
  _setImage(uri) {
    this.setState({ uri });
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  picture: {
    // height: 100
    // width: 400
  },
  pictureContain: {
    backgroundColor: "#f0f0f1",
    height: 250,
    width: 300,
    marginLeft: 35,
    marginTop: 10,
    borderWidth: 2
  },
  header: {
    backgroundColor: colors.bluee,
    height: 150,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "normal"
  },
  photo: {
    // width: 20,
    // backgroundColor: colors.bluee,
    // borderRadius: 50,
    marginLeft: 160,
    marginBottom: 5
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
