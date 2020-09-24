import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Nav from './Nav';

const Profile = () => {
  return (
    <View>
      <Text>Who I am</Text>
      <Image
        source={require('https://www.snappycanvas.com/3200-thickbox_default/admiral-pet-painting-from-photograph.jpg')}
      />
      <Text>Informations!</Text>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
