import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <View>
      <Text>Birth a new user</Text>
      <form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Register!</button>
      </form>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Explore;
