import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {LaunchScreen} from "../screens/launchScreen";
import ListByGenre from "../screens/listByGenre";
// import {MainBottomNavigator} from "./MainBottomNavigator";
// import {DetailScreen} from "../screens/DetailScreen";

const Stack = createStackNavigator();

export const NavGenre = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={LaunchScreen} options={{headerShown: false}} />
            <Stack.Screen name="Genre" component={ListByGenre}  />
            {/* <Stack.Screen name="Recherche" component={MainBottomNavigator} />
            <Stack.Screen name="Latest" component={DetailScreen} /> */}
        </Stack.Navigator>
    )
}
