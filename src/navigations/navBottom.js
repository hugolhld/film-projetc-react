import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import shouldUseActivityState from 'react-native-screens';
import {LaunchScreen} from "../screens/launchScreen";
import ListByGenre from "../screens/listByGenre";
import SearchScreen from '../screens/SearchScreen'

const TabNavigator = createBottomTabNavigator();

export const NavBottom = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Home" component={LaunchScreen} />
      <TabNavigator.Screen name="Search" component={SearchScreen} />
    </TabNavigator.Navigator>
  );
}