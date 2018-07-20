import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
      loggedInUserId: 1,
    };
    this.deleteChallenge = this.deleteChallenge.bind(this);
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }

  async componentWillMount() {
    const response = await axios.get(
      `http://localhost:8080/api/challenges/issuedTo/${
        this.state.loggedInUserId
      }`
    );
    // 'https://rallycoding.herokuapp.com/api/music_albums'
    this.setState({
      challenges: response.data,
    });
    console.log(this.state);
  }

  async deleteChallenge(challengeId) {
    try {
      await axios.delete(`http://localhost:8080/api/challenges/${challengeId}`);
      const result = await axios.get(
        `http://localhost:8080/api/challenges/issuedTo/${
          this.state.loggedInUserId
        }`
      );
      this.setState({
        challenges: result.data,
      });
    } catch (error) {
      console(error);
    }
  }

  async acceptChallenge(challengeId) {
    try {
      await axios.put(`http://localhost:8080/api/challenges/${challengeId}`, {
        accepted: true,
      });
      const result = await axios.get(
        `http://localhost:8080/api/challenges/issuedTo/${
          this.state.loggedInUserId
        }`
      );
      this.setState({
        challenges: result.data,
      });
      console.log('after: ', this.state);
      console.log('result: ', result.data);
    } catch (error) {
      console.log(error);
    }
  }

  renderFeed() {
    return this.state.challenges.map(challenge => (
      <FeedDetail
        key={challenge.id}
        challenge={challenge}
        deleteChallenge={this.deleteChallenge}
        acceptChallenge={this.acceptChallenge}
      />
    ));
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderFeed()}</ScrollView>;
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
