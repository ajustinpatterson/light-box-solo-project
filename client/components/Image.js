import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';

const CustomImage = ({ image }) => {
  console.log('image prop', image.id);
  return (
    <ImageBackground
      source={{ uri: image.urls.regular }}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 20,
  },
});

export default CustomImage;
