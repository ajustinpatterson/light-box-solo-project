import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import CustomImage from '../components/Image';
import ImageService from '../services/ImageService';
import * as ScreenOrientation from 'expo-screen-orientation';

const UserGallery = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const getAllImages = ImageService.getAllImages;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
  }

  useEffect(() => {
    changeScreenOrientation();
    getAllImages().then((data) => setImages(data));
  }, []);
  return (
    <View>
      <StatusBar hidden />
      <FlatList
        data={images}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <CustomImage image={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 20,
  },
});

export default UserGallery;
