import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './components/header';
import AllUsers from './components/AllUsers';
import Home from './components/Home';
import Challenges from './components/Challenges';
import Feed from './components/Feed';
import AddChallenge from './components/AddChallenge';
import { createStackNavigator } from 'react-navigation';

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: { header: null },
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
      }),
    },
    AllUsers: {
      screen: AllUsers,
      navigationOptions: ({ navigation }) => ({
        title: `My App`,
      }),
    },
    Challenges: {
      screen: Challenges,
      navigationOptions: ({ navigation }) => ({
        title: `Challenges`,
      }),
    },
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => ({
        title: `Feed`,
      }),
    },
    AddChallenge: {
      screen: AddChallenge,
      navigationOptions: ({ navigation }) => ({
        title: `Add`,
      }),
    },
  },
  {
    initialRouteName: `Main`,
  }
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
