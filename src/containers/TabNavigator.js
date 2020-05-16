import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import DeckListView from "./DeckListView";
import NewDeckView from "./NewDeckView";
import DeckView from "./DeckView";
import AddCardView from "./AddCardView";
import QuizView from "./QuizView";
import { gray, orange, white } from "../../utils/colors";

const navigatonBarConfig = {
  headerStyle: {
    backgroundColor: orange,
  },
  headerTintColor: white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

const DecksStackNavigator = createStackNavigator(
  {
    "All decks": DeckListView,
    DeckView,
    AddCardView,
    QuizView
  },
  {
    initialRouteName: "All decks",
    defaultNavigationOptions: navigatonBarConfig
  }
);

const NewDeckStackNavigator = createStackNavigator(
  {
    "Create new deck": NewDeckView
  },
  {
    initialRouteName: "Create new deck",
    defaultNavigationOptions: navigatonBarConfig
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Decks: DecksStackNavigator,
    "New Deck": NewDeckStackNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case "Decks":
            return <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor}/>
          case "New Deck":
            return <Ionicons name="ios-add" size={30} color={tintColor} />;
          default:
            return null;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: orange,
      inactiveTintColor: gray,
    },
  }
);

export default createAppContainer(TabNavigator);
