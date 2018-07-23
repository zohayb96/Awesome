import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImagePickerIOS,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import RedButton from './RedButton';
import AlternateButton from './AlternateButton';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      responseText: '',
      imageUrl: '',
      responsePicture: null,
      loggedInUserId: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  async handleSubmit(submitEvent) {
    try {
      this.props.updateView(
        this.props.challenge.id,
        this.state.rating,
        this.state.loggedInUserId,
        this.state.responseText,
        this.state.responsePicture
      );
    } catch (error) {
      console.log(error);
    }
  }

  async handleReject(submitEvent) {
    try {
      this.props.rejectChallenge(
        this.props.challenge.id,
        this.state.rating,
        this.state.loggedInUserId,
        this.state.responseText,
        this.state.responsePicture
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let { responsePicture } = this.state;
    return (
      <Card>
        <CardSection>
          <View style={styles.container}>
            <CardSection>
              <TextInput
                name="responseText"
                id="responseText"
                value={this.state.responseText}
                onChangeText={responseText => this.setState({ responseText })}
                placeholder="Add Review"
                style={styles.textStyle}
              />
            </CardSection>
            <CardSection>
              <TextInput
                name="rating"
                id="rating"
                value={this.state.rating}
                onChangeText={rating => this.setState({ rating })}
                placeholder="Add Rating 0-100"
                style={styles.textStyle}
              />
            </CardSection>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {responsePicture && (
                <Image
                  source={{ uri: responsePicture }}
                  style={{
                    height: 250,
                    width: 250,
                  }}
                />
              )}
            </View>
            <CardSection>
              <AlternateButton onPress={this.pickImage}>
                Response Image
              </AlternateButton>
            </CardSection>
            <CardSection>
              <Button onPress={this.handleSubmit}>Complete Challenge</Button>
            </CardSection>
            <CardSection>
              <RedButton onPress={this.handleReject}>
                Remove Challenge
              </RedButton>
            </CardSection>
          </View>
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
      this.setState({ responsePicture: result.uri });
    }
    console.log(this.state);
  };
}

const styles = {
  textStyle: {
    height: 30,
    width: '100%',
    flex: 2,
    fontSize: 15,
    paddingTop: 5,
  },
  container: {
    width: '100%',
    height: null,
  },
};

export default RatingForm;
