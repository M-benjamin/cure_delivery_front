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
  TouchableHighlight,
  Alert
} from "react-native";
import markers from "../data/pharmacie.json";
import Icon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";
import colors from "../assets/styles/colors";
import { Constants, Location, Permissions } from "expo";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapV extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "MAP",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-map" size={22} color={tintColor} />
    ),
    // headerRight: (
    //   <NavBarButton
    //     handleButtonPress={() => navigation.navigate("JustifContainer")}
    //     location="right"
    //     color={colors.white}
    //     text="Forgot Password"
    //   />
    // ),
    headerLeft: <Image />,
    // headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white
  };

  state = {
    markers,
    isLocated: false,
    locationResult: null,
    location: { coords: { latitude: 48.83066177, longitude: 2.32964615469007 } }
  };

  componentWillMount() {
    // console.log(markers);
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  // componentDidMount() {

  // }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location,
        isLocated: true
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      location,
      isLocated: true
    });
  };

  onMarkerPress(i) {
    console.log(i);
    console.log("madjiiiiiid");
    console.log("this is ", this.state.markers[i]);
    const namePharmacie = this.state.markers[i].fields.rs;

    const address =
      this.state.markers[i].fields.numvoie +
      " " +
      this.state.markers[i].fields.typvoie +
      " " +
      this.state.markers[i].fields.voie +
      " " +
      this.state.markers[i].fields.cp +
      ", " +
      this.state.markers[i].fields.commune;
    console.log(address);
    fetch("https://cure-delivery-api.herokuapp.com/api/pharmacie/set", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nom: namePharmacie,
        address: address
      })
    })
      .then(responseJson => {
        console.log("succccccccccc");
        console.log(responseJson);
        return responseJson.namePharmacie;
      })
      .catch(error => {
        console.error(error);
      });

    const { navigate } = this.props.navigation;
    navigate("JustifContainer");
  }
  // TODO LATER
  redirect() {
    console.log("pressed");
  }

  // > Get current location of the user
  _PickLocationHandler = () => {};

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
          region={{
            latitude: 48.83066175,
            longitude: 2.32964615469007,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.state.markers.map((marker, index) => {
            const coordinates = {};
            coordinates.latitude = marker.fields.lat;
            coordinates.longitude = marker.fields.lng;

            // console.log("I am in location ----->", this.state.location.coords);

            // console.log("cordinates are", coordinates);
            return (
              <MapView.Marker
                key={index}
                coordinate={coordinates}
                // coordinate={this.state.location.coords}
                image={require("../assets/img/tablets.png")}
                onPress={() => {
                  // e.stopPropagation();
                  this.onMarkerPress(index);
                }}
              />
            );
          })}

          {this.state.isLocated && (
            <MapView.Marker
              // key={index}
              // coordinate={coordinates}
              coordinate={this.state.location.coords}
              image={require("../assets/img/map-m.png")}
              // onPress={e => {
              //   e.stopPropagation();
              //   this.onMarkerPress();
              // }}
            />
          )}
        </MapView>

        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => this._getLocationAsync()}
            style={styles.findHomesButton}
          >
            <Text style={styles.findHomesButtonText}>Locate Me</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden"
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)"
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
