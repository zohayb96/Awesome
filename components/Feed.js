import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from 'react-native';
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

    // return <ScrollView>{this.renderFeed()}</ScrollView>;
    return (
      <View>
        {this.state.challenges.length === 0 ? (
          <View style={styles.container}>
            <Text style={styles.textStyle}>No New Challenges</Text>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri:
                  'https://images.clipartuse.com/30fbd6e30257552d6f4c4339ff4ca06e_floresta-e-safari-3-lionpng-minus-clipart-pinterest-_1500-1500.png',
              }}
            />
          </View>
        ) : (
          <ScrollView>{this.renderFeed()}</ScrollView>
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

export default Feed;
