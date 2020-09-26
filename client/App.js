import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import List from './components/List';
import UserGallery from './components/UserGallery';
import Welcome from './components/Welcome';

//if no user, create. if logged out, show login. else:

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {},
  gray: { backgroundColor: 'lightgray' },
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
