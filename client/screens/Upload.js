import React, { useState, useEffect, useContext } from 'react';
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

export default function Upload(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(image);
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dul6b2ewq/upload';
  const uploadPreset = 'j5owlaeh';

  const openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      base64: true,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage({ localUri: pickerResult.uri });

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
        setImage(data);
        console.log(image);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Text> Look at our pretty picture! </Text>
      <Image style={{ width: 150, height: 150 }} source={{ uri: image.url }} />
      <Button
        onPress={() => {
          openImagePickerAsync();
        }}
        title="upload"
      ></Button>
    </View>
  );
}
