import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Upload from './screens/Upload';
import Register from './screens/Register';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import UserGallery from './screens/UserGallery';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UserGallery" component={UserGallery} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//if no user, create. if logged out, show login. else:

export default App;
