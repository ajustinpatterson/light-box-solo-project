import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadService from '../services/UploadService';

export default function Upload({ navigation }) {
  const [image, setImage] = useState(null);
  const imageExists = image ? image.url : null;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    UploadService.openImagePickerAsync();
  }, []);

  return <View></View>;
}

const styles = StyleSheet.create({});
