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
      `http://10.2.0.130:8080/api/challenges/accepted/${
        this.state.loggedInUserId
      }`
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

    return (
      <View>
        <SegmentedControlIOS
          values={['Created', 'Pending', 'Completed']}
          selectedIndex={0}
          tintColor={'#2d3d54'}
          // backgroundColor={'#f9f9f9'}
          // borderColor={'#009a9a'}
          // borderWidth={2}
          marginTop={8}
        />
        {this.state.challenges === [] ? (
          <CardSection>
            <Text>No Challenges To Display</Text>
          </CardSection>
        ) : (
          <ScrollView>{this.renderAlbums()}</ScrollView>
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
