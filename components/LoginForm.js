import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImagePickerIOS,
  Alert,
} from 'react-native';
import store, { getMe } from './../app/store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { ImagePicker, Permissions } from 'expo';
import Home from './Home';
import Button from './Button';
import FriendsButton from './FriendsButton';
import AlternateButton from './AlternateButton';
import Card from './Card';
import CardSection from './CardSection';
import login from '../app/store';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(evt) {
    try {
      const response = await axios.put(`http://localhost:8080/api/auth/login`, {
        username: this.state.username,
        password: this.state.password,
      });
      this.setState({ user: response.data });
      this.props.navigation.navigate('AllUsers', { user: this.state.user });
    } catch (error) {
      console.log(error);
      Alert.alert('Login Failed!');
    }
  }

  // handleSubmit(evt) {
  //   evt.preventDefault();
  //   const email = this.state.email;
  //   const password = this.state.password;
  //   axios
  //     .post('http://localhost:8080/api/auth/login', { email, password })
  //     .then(res => {
  //       const user = res.data;
  //       this.setState({ user });
  //       this.props.navigation.navigate('Page', { user: this.state.user });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    console.log('state: ', this.state);
    return (
      <View style={styles.container}>
        <CardSection>
          <View style={styles.container}>
            <CardSection>
              <TextInput
                name="username"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
                placeholder="Username"
                style={styles.textStyle}
                autoCapitalize="none"
              />
            </CardSection>
            <CardSection>
              <TextInput
                name="password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                style={styles.textStyle}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.handleSubmit}>Log In</Button>
            </CardSection>
          </View>
        </CardSection>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      const user = this.state.username;
      const password = this.state.password;
      dispatch(login({ username, password })).then(() => {
        // ownProps.history.push('/home');
        console.log('Success');
      });
    },
  };
};

const styles = {
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  textStyle: {
    height: 30,
    width: '100%',
    flex: 2,
    fontSize: 14,
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
  },
  buttonStyle: {
    height: 20,
    width: 80,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#2d3d54',
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

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
