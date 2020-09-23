import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nav from './components/Nav';

const Explore = () => {
  return (
    <View>
      <Text>Who I am</Text>
      <img src="https://www.snappycanvas.com/3200-thickbox_default/admiral-pet-painting-from-photograph.jpg"></img>
      <Text>Informations!</Text>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Explore;
