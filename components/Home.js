import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AllUsers from './AllUsers';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    {/* <AlbumList /> */}
    <Text>Welcome To My App :)</Text>
    <Button onPress={() => navigation.navigate(`AllUsers`)} title="Login" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default Home;
