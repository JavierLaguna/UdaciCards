import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import TabNavigator from "./src/containers/TabNavigator";
import { blue } from "./utils/colors";
import { getDecks } from "./utils/api";
import reducer from "./src/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { setDeckListAction } from "./src/actions/deckActions";

const middleware = [thunk];
const composeEnhancers = compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    // TODO: FIX NOTIFICATION
    // setLocalNotification(); 
    let decks = await getDecks();
    if (!decks) {
      decks = this.populateInitialDeckList();
      // decks = {};
    }
    store.dispatch(setDeckListAction(decks));
    this.setState({ loading: false });
  }

  populateInitialDeckList() {
    return {
      React: {
        author: "Homer",
        title: "React",
        votes: [1, 3, 2, 3, 2, 3, 3, 3],
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces",
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
          },
        ],
      },
      JavaScript: {
        author: "Toad",
        title: "JavaScript",
        votes: [],
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
          },
        ],
      },
    };
  }

  render() {
    const { loading } = this.state;

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {loading ? (
            <ActivityIndicator style={{ flex: 1 }} size="large" color={blue} />
          ) : (
            <TabNavigator />
          )}
        </View>
      </Provider>
    );
  }
}
