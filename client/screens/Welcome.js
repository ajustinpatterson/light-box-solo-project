import { coverage } from 'browserslist';
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Upload from './Upload';

const image = {
  uri:
    'https://images.unsplash.com/photo-1549197669-65ad15308853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
};

const Welcome = ({ navigation }) => {
  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.appButton}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButton}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={styles.buttonText}>register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButton}
          onPress={() => {
            navigation.navigate('UserGallery');
          }}
        >
          <Text style={styles.buttonText}>feed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButton}
          onPress={() => {
            navigation.navigate('Upload');
          }}
        >
          <Text style={styles.buttonText}>upload</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appButton: {
    flex: 1,
    alignItems: 'center',
    maxHeight: '10%',
    margin: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 30,
    color: 'lightgray',
  },
});
export default Welcome;
