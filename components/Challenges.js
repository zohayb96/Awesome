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
    this.rejectChallenge = this.rejectChallenge.bind(this);
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
        rejectChallenge={this.rejectChallenge}
      />
    ));
  }

  async rejectChallenge(id, rating, currentUser) {
    try {
      await axios.put(`http://192.168.1.11:8080/api/challenges/${id}`, {
        accepted: false,
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

  render() {
    console.log(this.state);

    return (
      <View>
        {this.state.challenges.length === 0 ? (
          <View style={styles.container}>
            <Text style={styles.textStyle}>No Pending Challenges</Text>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri:
                  'https://images.clipartuse.com/30fbd6e30257552d6f4c4339ff4ca06e_floresta-e-safari-3-lionpng-minus-clipart-pinterest-_1500-1500.png',
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

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  thumbnailStyle: {
    height: 200,
    width: 200,
  },
  textStyle: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    // color: '#2d3d54',
    // backgroundColor: '#2d3d54',
    fontFamily: 'Helvetica Neue',
  },
};

export default Challenges;
