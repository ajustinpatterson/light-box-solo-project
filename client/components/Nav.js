import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Nav = createStackNavigator();

const NavStack = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Login" component="Login" />
      <Nav.Screen name="Register" component="Register" />
    </Nav.Navigator>
  );
};
