import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './components/header';
import AllUsers from './components/AllUsers';
import Home from './components/Home';
import Challenges from './components/Challenges';
import Feed from './components/Feed';
import AddChallenge from './components/AddChallenge';
import UserProfile from './components/UserProfile';
import { createStackNavigator } from 'react-navigation';

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
        title: `Home`,
      }),
    },
    AllUsers: {
      screen: AllUsers,
      navigationOptions: ({ navigation }) => ({
        title: `ChallengeMe`,
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
    UserProfile: {
      screen: UserProfile,
      navigationOptions: ({ navigation }) => ({
        title: `Profile`,
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
