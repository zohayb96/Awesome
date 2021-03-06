import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  SegmentedControlIOS,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const UserDetail = ({ user, challenges }) => {
  const { firstName, lastName, username, email, picture, image, url } = user;
  const { challengeText, issuedFrom, challengePicture, issuedTo } = challenges;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    completedChallengeImageStyle,
    challengesContainer,
    sceneContainer,
    textStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: challengePicture }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{challengeText}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
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
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    // color: '#2d3d54',
    // backgroundColor: '#2d3d54',
    fontFamily: 'Helvetica Neue',
  },
};

export default UserDetail;
