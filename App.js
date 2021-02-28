import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthDemo from './tutorials/step11-jwt-auth/AuthDemo';
export default function App() {
  output = (
  <View style={ styles.container }>
    <AuthDemo apiURI='https://eshoppingapi-iheb.herokuapp.com'></AuthDemo>
  </View>)

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  },
});
