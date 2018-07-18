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

class InputForm extends Component {
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
          <TextInput
            name="text"
            id="text"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="Challenge Text"
            style={styles.textStyle}
          />
        </CardSection>
        <CardSection style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://www.daysoutwithkids.com/images/addphoto.png',
            }}
          />
        </CardSection>
        <CardSection>
          <Button>Add Challenge</Button>
        </CardSection>
        <CardSection>
          <ImagePicker />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: `center`,
    // justifyContent: `center`,
    color: 'red',
  },
  textStyle: {
    height: 30,
    width: '100%',
    flex: 2,
    fontSize: 18,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
  },
});

export default InputForm;
