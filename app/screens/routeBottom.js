import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import CameraRouter from "./CameraRouter";
import Feed from "../components/Feed";

const MainRouter = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed
    },
    Camera: {
      screen: CameraRouter,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              // onPress={() => props.navigation.navigate('Feed')}
            >
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              // onPress={() => props.navigation.navigate('CameraRouter')}
            >
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button vertical>
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default MainRouter;
