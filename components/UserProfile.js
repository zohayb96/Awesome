import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  SegmentedControlIOS,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import UserDetail from './UserDetail';
import UserCompleted from './UserCompleted';
import UserPending from './UserPending';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Feed from './Feed';
import AddChallenge from './AddChallenge';
import FeedDetail from './FeedDetail';
import Card from './Card';
import CardSection from './CardSection';
import { createStackNavigator } from 'react-navigation';
import Challenges from './Challenges';
import EditUser from './EditUser';

class UserProfile extends Component {
  state = {
    users: [],
    createdChallenges: [],
    completedChallenges: [],
    feedbackChallenges: [],
    loggedInUserId: 1,
    selectedIndex: 0,
  };

  static navigationOptions = {
    title: 'Profile',
  };

  async componentWillMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await axios.get(
      `http://localhost:8080/api/users/${user.id}`
    );
    const challengeData = await axios.get(
      `http://localhost:8080/api/challenges/own/${user.id}`
    );
    const completedChallengeData = await axios.get(
      `http://localhost:8080/api/challenges/completed/${user.id}`
    );

    const feedbackChallengeData = await axios.get(
      `http://localhost:8080/api/challenges/feedback/${user.id}`
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
    const { navigate } = this.props.navigation;

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
            <View>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigate('EditUser')}
              >
                <Text style={styles.buttonTextStyle}>Edit</Text>
              </TouchableOpacity>
            </View>
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
  buttonStyle: {
    height: 20,
    width: 80,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#009a9a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonTextStyle: {
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Helvetica Neue',
  },
};

export default UserProfile;
