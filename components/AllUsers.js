import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import {
  createBottomTabNavigator,
  TabBarBottom,
  StackNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Challenges from './Challenges';
import Feed from './Feed';
import AddChallenge from './AddChallenge';
import UserProfile from './UserProfile';
import EditUser from './EditUser';

class AllUsers extends Component {
  state = {
    users: [],
    user: {},
  };

  async componentWillMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('user');
    console.log('user: ', itemId);
    const response = await axios.get(
      `http://localhost:8080/api/users/friends/${itemId.id}`
    );
    this.setState({
      users: response.data,
      user: itemId,
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

// export const rootStack = StackNavigator({
//   IndividualUser: { screen: IndividualUser },
// });

export default createBottomTabNavigator(
  {
    Friends: { screen: AllUsers },
    Add: { screen: AddChallenge },
    Feed: { screen: Feed },
    Challenges: { screen: Challenges },
    Profile: { screen: UserProfile },
    Settings: { screen: EditUser },
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
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

{
  /* <ion-icon name="contacts" />; */
}
