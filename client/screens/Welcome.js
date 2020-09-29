import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const Welcome = ({}) => {
  const bkgrndImage = {
    uri:
      'https://images.unsplash.com/photo-1567581807005-1a3609c32d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  };
  return (
    <ImageBackground style={s.background} source={bkgrndImage}>
      <SafeAreaView style={s.safeArea}>
        <View style={s.wrapper}>
          <View style={s.header}>
            <Text style={s.bigTitle}>Explore</Text>
            <Text style={s.subTitle}>new photo communities</Text>
          </View>

          <View style={s.spacer} />

          <View style={s.controls}>
            <TouchableOpacity style={s.button}>
              <Text style={s.title}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  header: {
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cochin-Bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Cochin',
    color: 'lightgray',
  },
  bigTitle: {
    fontSize: 30,
    fontFamily: 'Cochin',
    color: 'white',
  },
  spacer: {
    height: 470,
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    opacity: 0.7,
    flex: 1,
  },
  gap: {
    width: 25,
  },
});

export default Welcome;
