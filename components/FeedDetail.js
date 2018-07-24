import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import AlternateButton from './AlternateButton';
import axios from 'axios';

const FeedDetail = props => {
  // class FeedDetail extends Component {
  //   constructor() {
  //     super();
  //     state = {
  //       challenges: [],
  //     };
  //   }

  //   async componentDidMount() {
  //     const res = await axios.get('http://localhost:8080/api/challenges/');
  //     this.setState({ challenges: res.data });
  //   }

  // render() {
  const { challengeText, issuedFrom, challengePicture, id } = props.challenge;
  console.log(props);

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    buttonStyle,
    buttonContainer,
    textStyle,
  } = styles;

  // const challenge = this.props.challenge;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: issuedFrom.picture }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{challengeText}</Text>
          <Text>{issuedFrom.firstName + ' ' + issuedFrom.lastName}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: challengePicture }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => props.acceptChallenge(id)}>Accept</Button>
        <AlternateButton onPress={() => props.deleteChallenge(id)}>
          Reject
        </AlternateButton>
      </CardSection>
    </Card>
  );
};
// }

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
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

export default FeedDetail;
