import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Challenges from './Challenges';
import Feed from './Feed';
import AddChallenge from './AddChallenge';
import UserProfile from './UserProfile';

class AllUsers extends Component {
  state = { users: [] };

  async componentWillMount() {
    const response = await axios.get(
      'http://10.2.0.130:8080/api/users'
      // 10.2.5.238
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      users: response.data,
    });
    console.log(this.state);
  }

  renderAlbums() {
    return this.state.users.map(user => (
      <AlbumDetail key={user.id} user={user} />
    ));
  }

  render() {
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default createBottomTabNavigator(
  {
    Friends: { screen: AllUsers },
    Add: { screen: AddChallenge },
    Feed: { screen: Feed },
    Challenges: { screen: Challenges },
    Profile: { screen: UserProfile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Friends') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        } else if (routeName === 'Feed') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Challenges') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Add') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

{
  /* <ion-icon name="contacts" />; */
}
