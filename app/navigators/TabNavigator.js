import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import MapContainer from "../containers/MapContainer";
import JustifContainer from "../containers/JustifContainer";
import OrderContainer from "../containers/OrderContainer";
import PaymentContainer from "../containers/PaymentContainer";
// import TripsContainer from "../containers/TripsContainer";
// import CreateList from "../screens/CreateList";
import colors from "../assets/styles/colors";

// export const ExploreTab = StackNavigator(
//   {
//     ExploreContainer: { screen: ExploreContainer },
//     CreateList: { screen: CreateList }
//   },
//   {
//     mode: "modal"
//   }
// );

const LoggedInTabNavigator = TabNavigator(
  {
    // Explore: ExploreTab,
    MapContainer: { screen: MapContainer },
    JustifContainer: { screen: JustifContainer },
    OrderContainer: { screen: OrderContainer },
    PaymentContainer: { screen: PaymentContainer }
  },
  {
    tabBarOptions: {
      // labelStyle: {
      fontWeight: "600"
      // marginBottom: 5
      // }
      // activeTintColor: colors.pink
    }
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: "bottom"
  }
);

export default LoggedInTabNavigator;
