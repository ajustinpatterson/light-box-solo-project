import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageService from '../services/ImageService';

const UserGallery = () => {
  const [images, setImages] = useState([]);

  const getAllImages = ImageService.getAllImages;

  useEffect(() => {
    getAllImages();
  }, []);
  return <View></View>;
};

const styles = StyleSheet.create({});

export default UserGallery;
