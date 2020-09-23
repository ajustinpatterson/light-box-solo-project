import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Explore from './components/Explore';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.gray, styles.container]}>
        <Text style={{ color: 'lightgray' }}>I have birthed!</Text>
      </View>
      <Explore />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gray: { backgroundColor: 'lightgray' },
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
