import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import ChallengeDetail from './ChallengeDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';

class Challenges extends Component {
  state = { challenges: [] };

  async componentWillMount() {
    const response = await axios.get(
      'http://172.16.21.129:8080/api/challenges'
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      challenges: response.data,
    });
    console.log(this.state);
  }

  renderAlbums() {
    return this.state.challenges.map(challenge => (
      <ChallengeDetail key={challenge.id} challenge={challenge} />
    ));
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default Challenges;
