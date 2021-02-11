import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
// import {LaunchScreen} from './src/screens/launchScreen'
import {NavGenre} from './src/navigations/navGenre'
import {NavBottom} from './src/navigations/navBottom'
import FilmDetails from './src/screens/filmDetails'

export default function App() {
  return (
    <NavigationContainer /* style={styles.container} */>
      <NavBottom />
    </NavigationContainer>
    // <View>
    //   <FilmDetails/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
});
