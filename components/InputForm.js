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
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeText: '',
      challengePicture: null,
      users: [],
    };
  }

  async componentWillMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL);
    const response = await axios.get(
      'http://localhost:8080/api/users'
      // 'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      users: response.data,
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
          <Button style={styles.buttonStyle} onPress={this.pickImage}>
            Image
          </Button>
        </CardSection>
        <CardSection>
          <Button>Add Challenge</Button>
        </CardSection>
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
  buttonStyle: {
    height: 30,
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#009a9a',
  },
};

export default InputForm;
