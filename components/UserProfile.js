import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import UserDetail from './UserDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Challenges from './Challenges';
import Feed from './Feed';
import AddChallenge from './AddChallenge';

class UserProfile extends Component {
  state = {
    users: [],
    challenges: [],
  };

  async componentWillMount() {
    const response = await axios.get(
      'http://10.2.5.238:8080/api/users/1'
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    const challengeData = await axios.get(
      'http://10.2.5.238:8080/api/challenges/'
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      users: response.data,
      challenges: challengeData.data,
    });
    console.log(this.state);
  }

  renderAlbums() {
    return (
      <UserDetail user={this.state.users} challenges={this.state.challenges} />
    );
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default UserProfile;
