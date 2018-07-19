import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import SliderComponent from './Slider';
import RatingForm from './RatingForm';
// import Slider from 'react-native-slider';

const ChallengeDetail = ({ challenge }) => {
  // class ChallengeDetail extends Component {

  const { challengeText, issuedFrom, challengePicture } = challenge;
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
          <Text>{issuedFrom.firstName + ' ' + issuedFrom.lastName}</Text>
        </View>
      </CardSection>
      <CardSection>
        <RatingForm />
      </CardSection>
      {/* <CardSection>
        <Image style={imageStyle} source={{ uri: picture }} />
      </CardSection> */}
      {/* <TouchableOpacity>
          <Text style={buttonStyle}>Complete Challenge</Text>
        </TouchableOpacity> */}
      {/* <SliderComponent /> */}
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

export default ChallengeDetail;
