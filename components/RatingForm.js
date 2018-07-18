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
import ImagePicker from './ImagePicker';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      imageUrl: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(evt) {
  //   this.setState({ [evt.target.name]: evt.target.value });
  //   console.log(this.state);
  // }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.container}>
            <TextInput
              name="text"
              id="text"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              placeholder="Add Rating 0-100"
              style={styles.textStyle}
            />
            <Button>Complete Challenge</Button>
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
    fontSize: 18,
  },
  container: {
    width: '100%',
    height: null,
  },
});

export default RatingForm;
