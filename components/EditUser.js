import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';

class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
      loggedInUserId: 1,
    };
  }

  // async componentWillMount() {
  //   const response = await axios.get('http://192.168.1.11:8080/api/users/1');
  // }

  //   this.setState({
  //     users: response.data,
  //   });
  //   console.log(this.state);
  // }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
};

export default EditUser;
