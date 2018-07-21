import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SegmentedControlIOS,
  Image,
} from 'react-native';
import axios from 'axios';
import ChallengeDetail from './ChallengeDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import AllUsers from './AllUsers';
import CardSection from './CardSection';

class Challenges extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
      loggedInUserId: 1,
    };
    this.updateView = this.updateView.bind(this);
  }

  async updateView(id, rating, currentUser) {
    console.log('pages State:', this.state);
    try {
      await axios.put(`http://192.168.1.11:8080/api/challenges/${id}`, {
        rating: rating,
      });
      const response = await axios.get(
        `http://192.168.1.11:8080/api/challenges/accepted/${currentUser}`
      );
      this.setState({
        challenges: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentWillMount() {
    const response = await axios.get(
      `http://192.168.1.11:8080/api/challenges/accepted/${
        this.state.loggedInUserId
      }`
    );
    this.setState({
      challenges: response.data,
    });
    console.log(this.state);
  }

  renderChallenges() {
    return this.state.challenges.map(challenge => (
      <ChallengeDetail
        key={challenge.id}
        challenge={challenge}
        updateView={this.updateView}
      />
    ));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.state.challenges.length === 0 ? (
          <View style={styles.container}>
            <Text>No Pending Challenges</Text>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/lion-emoticon/595/LION_EMOTICON-15-512.png',
              }}
            />
          </View>
        ) : (
          <ScrollView>{this.renderChallenges()}</ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: `center`,
    justifyContent: `center`,
    flex: 1,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default Challenges;
