import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import List from './components/List';
import Welcome from './components/Welcome';
import UserGallery from './components/UserGallery';

//if no user, create. if logged out, show login. else:

const App = () => {
  return (
    <View>
      <UserGallery />
    </View>
  );
};

export default App;
