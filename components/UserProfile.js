import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  SegmentedControlIOS,
} from 'react-native';
import axios from 'axios';
import UserDetail from './UserDetail';
import UserCompleted from './UserCompleted';
import UserPending from './UserPending';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Challenges from './Challenges';
import Feed from './Feed';
import AddChallenge from './AddChallenge';
import FeedDetail from './FeedDetail';
import Card from './Card';
import CardSection from './CardSection';

class UserProfile extends Component {
  state = {
    users: [],
    createdChallenges: [],
    completedChallenges: [],
    feedbackChallenges: [],
    loggedInUserId: 1,
    selectedIndex: 0,
  };

  async componentWillMount() {
    const response = await axios.get('http://localhost:8080/api/users/1');
    const challengeData = await axios.get(
      `http://localhost:8080/api/challenges/own/${this.state.loggedInUserId}`
    );
    const completedChallengeData = await axios.get(
      `http://localhost:8080/api/challenges/completed/${
        this.state.loggedInUserId
      }`
    );

    const feedbackChallengeData = await axios.get(
      `http://localhost:8080/api/challenges/feedback/${
        this.state.loggedInUserId
      }`
    );

    this.setState({
      users: response.data,
      createdChallenges: challengeData.data,
      completedChallenges: completedChallengeData.data,
      feedbackChallenges: feedbackChallengeData.data,
    });
    console.log(this.state);
  }

  renderFeed() {
    return this.state.createdChallenges.map(challenge => (
      <UserDetail
        key={challenge.id}
        user={this.state.users}
        challenges={challenge}
      />
    ));
  }

  renderCompleted() {
    return this.state.completedChallenges.map(challenge => (
      <UserCompleted
        key={challenge.id}
        user={this.state.users}
        challenges={challenge}
      />
    ));
  }

  renderPending() {
    return this.state.feedbackChallenges.map(challenge => (
      <UserPending
        key={challenge.id}
        user={this.state.users}
        challenges={challenge}
      />
    ));
  }

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      picture,
      image,
      url,
    } = this.state.users;
    const {
      challengeText,
      issuedFrom,
      challengePicture,
    } = this.state.createdChallenges;
    console.log(this.state);

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: picture }} />
            <CardSection>
              <Text style={styles.headerTextStyle}>
                {firstName + ' ' + lastName}
              </Text>
            </CardSection>
          </View>
        </CardSection>
        <SegmentedControlIOS
          values={['Created', 'Completed', 'Feedback']}
          selectedIndex={0}
          tintColor={'#2d3d54'}
          selectedIndex={this.state.selectedIndex}
          onChange={event => {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex,
            });
          }}
          marginTop={5}
          marginBottom={5}
          // backgroundColor={'#f9f9f9'}
          // borderColor={'#009a9a'}
          // borderWidth={2}
        />
        {this.state.selectedIndex === 0 ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {this.renderFeed()}
          </ScrollView>
        ) : this.state.selectedIndex === 1 ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {this.renderCompleted()}
          </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {this.renderPending()}
          </ScrollView>
        )}
      </View>
    );
  }
}

{
  /* <View>
          <Text style={styles.textStyle}>Created Challenges</Text>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {this.renderFeed()}
        </ScrollView>
        <View>
          <Text style={styles.textStyle}>Completed Challenges</Text>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {this.renderCompleted()}
        </ScrollView>
        <View>
          <Text style={styles.textStyle}>Pending Challenges</Text>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {this.renderPending()}
        </ScrollView> */
}

const styles = {
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 14,
    width: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#2d3d54',
    fontFamily: 'Helvetica Neue',
  },
};

export default UserProfile;
