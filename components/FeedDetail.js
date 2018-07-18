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
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: issuedFrom.picture }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{challengeText}</Text>
          <Text>{issuedFrom.firstName}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: picture }} />
      </CardSection>
      <CardSection>
        <TouchableOpacity>
          <Text style={buttonStyle}>Add to challenges</Text>
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
  buttonStyle: {
    height: 30,
    flex: 1,
    width: null,
  },
};

export default FeedDetail;
