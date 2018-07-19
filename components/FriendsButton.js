import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FriendsButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'left',
    color: '#000000',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  buttonStyle: {
    height: 30,
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#fbf7f5',
  },
};

export default FriendsButton;
