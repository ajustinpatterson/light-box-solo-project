import { coverage } from 'browserslist';
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AppButton from './AppButton';

const image = {
  uri:
    'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
};

const Welcome = () => {
  return (
    <View>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <Text style={{ color: 'lightgray' }}>Welcome</Text>
        <AppButton style={styles.appButton} title="log in" />
        <AppButton style={styles.appButton} title="register" />
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
  },
});
export default Welcome;
