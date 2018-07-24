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
import SignUp from './components/SignUp';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import { createStackNavigator } from 'react-navigation';
import ImagePicker from './components/ImagePicker';
import { Provider } from 'react-redux';
import store, { getMe } from './app/store';

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
    SignUp: {
      screen: SignUp,
      navigationOptions: ({ navigation }) => ({
        title: `SignUp`,
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: `Login`,
      }),
    },
    LoginForm: {
      screen: LoginForm,
      navigationOptions: ({ navigation }) => ({
        title: `LoginForm`,
      }),
    },
    ImagePicker: {
      screen: ImagePicker,
      navigationOptions: ({ navigation }) => ({
        title: `ImagePicker`,
      }),
    },
  },
  {
    initialRouteName: `Main`,
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
