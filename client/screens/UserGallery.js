import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  VirtualizedList,
} from 'react-native';
import CustomImage from '../components/Image';
import ImageService from '../services/ImageService';

const UserGallery = () => {
  const [images, setImages] = useState([]);

  const getAllImages = ImageService.getAllImages;

  useEffect(() => {
    getAllImages().then((data) => setImages(data));
  }, []);
  return (
    <View>
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
    backgroundColor: 'black',
  },
});

export default UserGallery;
