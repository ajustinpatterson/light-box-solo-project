import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'expo-image-picker';

export default function Upload(props) {
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dul6b2ewq/upload';
  const uploadPreset = 'j5owlaeh';

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      base64: true,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    let data = {
      file: base64Img,
      upload_preset: uploadPreset,
    };

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then(async (r) => {
        let data = await r.json();

        setPhoto(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Text> Look at our pretty picture! </Text>

      <Image
        source={{
          uri:
            'https://res.cloudinary.com/dul6b2ewq/image/upload/v1601127340/samples/ecommerce/leather-bag-gray.jpg',
        }}
        style={{ width: 150, height: 150 }}
      />
      <TouchableOpacity
        onPress={() => {
          openImagePickerAsync();
        }}
      >
        <Text
          style={{
            flex: 1,
            color: 'black',
            alignItems: 'center',
            fontSize: 30,
            maxHeight: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
