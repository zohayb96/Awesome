import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';

class Feed extends Component {
  state = { challenges: [] };

  async componentWillMount() {
    const response = await axios.get(
      'http://localhost:8080/api/challenges'
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      challenges: response.data,
    });
    console.log(this.state);
  }

  renderAlbums() {
    return this.state.challenges.map(challenge => (
      <FeedDetail key={challenge.id} challenge={challenge} />
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

export default Feed;
