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

const UserCompleted = ({ user, challenges }) => {
  const { firstName, lastName, username, email, picture, image, url } = user;
  const {
    challengeText,
    issuedFrom,
    challengePicture,
    issuedTo,
    rating,
  } = challenges;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    completedChallengeImageStyle,
    challengesContainer,
    sceneContainer,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: challengePicture }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{challengeText}</Text>
          <Text>
            Created by: {issuedFrom.firstName + ' ' + issuedFrom.lastName}
          </Text>
          {rating > 90 ? (
            <Text>You rated it: {rating} 🔥🔥🔥</Text>
          ) : rating > 80 ? (
            <Text>You rated it: {rating} 🔥🔥</Text>
          ) : rating > 70 ? (
            <Text>You rated it: {rating} 🔥</Text>
          ) : rating > 50 ? (
            <Text>You rated it: {rating} 👍</Text>
          ) : (
            <Text>You rated it: {rating} 👎</Text>
          )}
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
};

export default UserCompleted;
