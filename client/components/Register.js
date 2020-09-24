import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Register = () => {
  return (
    <View>
      <Text>Birth a new user</Text>
      <form>
        <TextInput placeholder="email" />
        <TextInput placeholder="username" />
        <TextInput placeholder="password" />
        <Button title="Register!" />
      </form>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
