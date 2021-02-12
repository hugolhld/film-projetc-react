
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import {NavBottom} from './src/navigations/navBottom'

export default function App() {
  return (
    <NavigationContainer>
      <NavBottom />
    </NavigationContainer>
  );
}