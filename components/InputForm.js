import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  AppRegistry,
  ImagePickerIOS,
  Alert,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import FriendsButton from './FriendsButton';
import AlternateButton from './AlternateButton';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeText: '',
      challengePicture: null,
      users: [],
      issuedFromId: 1,
      issuedToId: 2,
      AllUserIds: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(evt) {
    try {
      // for (id in this.state.AllUserIds) {
      const res = await axios.post(
        'http://10.2.5.238:8080/api/challenges',
        this.state
      );
      if (!res === null) {
        console.log(res.data);
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        );
      }
      // }
    } catch (err) {
      console.log(err);
    }
  }

  async componentWillMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL);
    const response = await axios.get('http://10.2.5.238:8080/api/users');
    this.setState({
      users: response.data,
    });
    this.state.users.map(user => {
      this.setState({ AllUserIds: this.state.AllUserIds.concat(user.id) });
    });
  }

  render() {
    let { challengePicture } = this.state;
    return (
      <Card>
        <CardSection>
          <TextInput
            name="challengeText"
            value={this.state.challengeText}
            onChangeText={challengeText => this.setState({ challengeText })}
            placeholder="Challenge Text"
            style={styles.textStyle}
          />
        </CardSection>
        <CardSection>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            {challengePicture && (
              <Image
                source={{ uri: challengePicture }}
                style={{
                  height: 250,
                  width: 250,
                }}
              />
            )}
          </View>
        </CardSection>
        <CardSection>
          <AlternateButton onPress={this.pickImage}>Image</AlternateButton>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit}>Add Challenge</Button>
        </CardSection>

        {/* Freidns List Component */}
        {/* <Card>
          <Text style={(color = 'blue')}>Send To:</Text>
          {this.state.users.map(user => {
            return (
              <CardSection key={user.id}>
                <FriendsButton>{user.username}</FriendsButton>
              </CardSection>
            );
          })}
          <FriendsButton>All</FriendsButton>
        </Card> */}
      </Card>
    );
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ challengePicture: result.uri });
    }
    console.log(this.state);
  };
}

const styles = {
  container: {
    color: 'red',
  },
  textStyle: {
    height: 30,
    width: '100%',
    flex: 2,
    fontSize: 18,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: 200,
  },
};

export default InputForm;
