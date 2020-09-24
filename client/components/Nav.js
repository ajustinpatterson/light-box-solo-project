import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Nav = () => {
  return (
    <View>
      <Button title="Feed" />
      <Button title="Explore" />
      <Button title="Upload" />
      <Button title="Curate" />
      <Button title="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Nav;
