import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome = () => {
  return (
    <View>
      <Text>Welcome page</Text>
      <Button title="Log In" />
      <Button title="Create Account" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
