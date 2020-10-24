import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';

const image = {
  uri: process.env.LOGIN_BG,
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Login here</Text>
          <Text style={styles.text}>email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="email"
          />
          <Text style={styles.text}>password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="password"
          />
        </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: '10%',
    margin: 10,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '50%',
    height: '70%',
    borderRadius: 3,
  },
  text: {
    fontSize: 30,
    color: 'lightgray',
  },
});
export default Login;
