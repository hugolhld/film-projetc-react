import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen'
import {NavGenre} from './navGenre'

const TabNavigator = createBottomTabNavigator();

export const NavBottom = () => {
  return (
    <TabNavigator.Navigator
        tabBarOptions={{
            activeTintColor: '#fff',
            activeBackgroundColor: '#B00020',
            swipeEnabled: true,
            showLabel: true
        }}
    >
      <TabNavigator.Screen name="Home" component={NavGenre} />
      <TabNavigator.Screen name="Search" component={SearchScreen} />
    </TabNavigator.Navigator>
  );
}