import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import AlternateButton from './AlternateButton';
import ImagePicker from './ImagePicker';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      text: '',
      imageUrl: '',
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.container}>
            <CardSection>
              <TextInput
                name="text"
                id="text"
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
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
            <CardSection>
              <Button>Complete Challenge</Button>
            </CardSection>
            <CardSection>
              <AlternateButton>Remove Challenge</AlternateButton>
            </CardSection>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default RatingForm;
