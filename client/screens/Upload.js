import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, setSt } from 'react-native';

const Upload = () => {
  const [photo, setPhoto] = useState([]);

  useEffect();
  return (
    <View>
      <Text>upload photo</Text>
      <Button title="Upload!" />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Upload;
