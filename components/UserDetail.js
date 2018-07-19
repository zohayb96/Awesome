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
  const { challengeText, issuedFrom, challengePicture } = challenges;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    completedChallengeImageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: picture }} />
          <CardSection>
            <Text style={headerTextStyle}>{firstName + ' ' + lastName}</Text>
          </CardSection>
        </View>
      </CardSection>
      <SegmentedControlIOS
        values={['Created', 'Completed']}
        selectedIndex={0}
        tintColor={'#009a9a'}
        backgroundColor={'#FFFFFF'}
        borderColor={'#009a9a'}
        borderWidth={2}
      />
      <CardSection>
        <View style={headerContentStyle}>
          <CardSection>
            <Text>Created Challenges</Text>
          </CardSection>
          {challenges.map(challenge => (
            <View key={challenge.id}>
              <Image
                style={completedChallengeImageStyle}
                source={{ uri: challenge.challengePicture }}
              />
              <Text>{challenge.challengeText}</Text>
            </View>
          ))}
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text>Completed Challenges</Text>
          {challenges.map(challenge => (
            <View>
              <Image
                style={completedChallengeImageStyle}
                source={{ uri: challenge.challengePicture }}
              />
              <Text>{challenge.challengeText}</Text>
            </View>
          ))}
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  completedChallengeImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default UserDetail;
