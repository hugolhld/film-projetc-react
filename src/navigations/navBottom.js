import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen'
import {NavGenre} from './navGenre'
import { FontAwesome } from '@expo/vector-icons'; 


const TabNavigator = createBottomTabNavigator();

export const NavBottom = () => {
  return (
    <TabNavigator.Navigator
        tabBarOptions={{
            activeTintColor: '#B5A90F',
            activeBackgroundColor: '#B00020',
            inactiveBackgroundColor: '#B00020',
            inactiveTintColor: '#fff',
            showLabel: false
        }}
    >
      <TabNavigator.Screen 
              name="Home"
              component={NavGenre}
              options={{tabBarIcon: ({color}) => (<FontAwesome name="home" size={24} color={color} />)}}
              />
      <TabNavigator.Screen 
              name="Search"
              component={SearchScreen}
              options={{tabBarIcon: ({color}) => (<FontAwesome name="search" size={24} color={color} />)}}
              />
    </TabNavigator.Navigator>
  );
}