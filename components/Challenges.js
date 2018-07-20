import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SegmentedControlIOS,
} from 'react-native';
import axios from 'axios';
import ChallengeDetail from './ChallengeDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';
import CardSection from './CardSection';

class Challenges extends Component {
  state = {
    challenges: [],
    loggedInUserId: 1,
  };

  async componentWillMount() {
    const response = await axios.get(
      `http://localhost:8080/api/challenges/accepted/${
        this.state.loggedInUserId
      }`
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      challenges: response.data,
    });
    console.log(this.state);
  }

  renderChallenges() {
    return this.state.challenges.map(challenge => (
      <ChallengeDetail key={challenge.id} challenge={challenge} />
    ));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.state.challenges === [] ? (
          <CardSection>
            <Text>No Challenges To Display</Text>
          </CardSection>
        ) : (
          <ScrollView>{this.renderChallenges()}</ScrollView>
        )}
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
});

export default Challenges;
