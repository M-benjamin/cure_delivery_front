import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Categories from "../components/explore/Categories";
import Listings from "../components/explore/Listings";
import colors from "../assets/styles/colors";
import categoriesList from "../data/categories";
import listings from "../data/listings";

export default class OrderContainer extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "ORDER",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shopping-cart" size={22} color={tintColor} />

      // credit-card

      // file-text-o
      // shopping-cart
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: []
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleAddToFav(listing) {
    const { navigate } = this.props.navigation;
    let { favouriteListings } = this.state;

    var index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id);
      this.setState({ favouriteListings });
    } else {
      navigate("CreateList", {
        listing,
        onCreateListClose: this.onCreateListClose
      });
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favouriteListings } = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId);
    }
    this.setState({ favouriteListings });
  }

  renderListings() {
    return listings.map((listing, index) => {
      return (
        <View key={`listing-${index}`}>
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.text}>Check your order :</Text>
        </View>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>Products of your order :</Text>
          {this.renderListings()}
          <View style={styles.price}>
            <Text style={styles.ptext}>Total Price: 20 €</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => this._getLocationAsync()}
            style={styles.findHomesButton}
          >
            <Text style={styles.findHomesButtonText}>Go to payment</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  price: {},
  ptext: {
    fontSize: 40,
    marginLeft: 20
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollview: {
    paddingTop: 50
  },
  scrollViewContent: {
    paddingBottom: 80
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "normal"
  },
  categories: {
    marginBottom: 40
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04
  },
  header: {
    backgroundColor: colors.bluee,
    height: 100,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 1.0
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
