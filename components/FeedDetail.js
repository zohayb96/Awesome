import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const FeedDetail = ({ challenge }) => {
  const { challengeText, issuedFrom, picture } = challenge;
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
        <Image style={imageStyle} source={{ uri: picture }} />
      </CardSection>
      <CardSection>
        <TouchableOpacity style={buttonStyle}>
          <Text
            style={textStyle}
            onPress={() => console.log('Accepted: ', { challengeText })}
          >
            Add to Challenges
          </Text>
        </TouchableOpacity>
      </CardSection>
    </Card>
  );
};

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
