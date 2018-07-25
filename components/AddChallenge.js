import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';
import InputForm from './InputForm';
import ImagePicker from './ImagePicker';
import Button from './Button';

class AddChallenge extends Component {
  state = {
    challenges: [],
  };
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    return (
      <View>
        <InputForm user={user} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
  },
});

export default AddChallenge;
