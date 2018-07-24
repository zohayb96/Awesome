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
      email: '',
      password: '',
    };
    this.handleSubmit.bind(this);
  }

  async handleSubmit(submitEvent) {
    try {
      const email = submitEvent.target.email.value;
      const password = submitEvent.target.password.value;
      dispatch(login(email, password));
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <CardSection>
          <View style={styles.container}>
            <CardSection>
              <TextInput
                name="email"
                value={this.state.email}
                // onChangeText={lastName => this.setState({ lastName })}
                placeholder="Email Address"
                style={styles.textStyle}
              />
            </CardSection>
            <CardSection>
              <TextInput
                name="password"
                value={this.state.password}
                // onChangeText={challengeText => this.setState({ email })}
                placeholder="Password"
                style={styles.textStyle}
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.handleSubmit}>Sign Up</Button>
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
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password })).then(() => {
        ownProps.history.push('/home');
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
