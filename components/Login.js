import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login here</Text>
      <form>
        <TextInput placeholder="username" />
        <TextInput placeholder="password" />
        <Button title="Login!" />
      </form>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
