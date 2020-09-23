import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Nav from './Nav';

const Upload = () => {
  return (
    <View>
      <Text>upload photo</Text>
      <Button title="Upload!" />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Upload;
