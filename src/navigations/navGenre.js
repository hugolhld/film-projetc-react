import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {LaunchScreen} from "../screens/launchScreen";
import ListByGenre from "../screens/listByGenre";
// import {MainBottomNavigator} from "./MainBottomNavigator";
import {DetailScreen} from "../screens/filmDetails";

const Stack = createStackNavigator();

export const NavGenre = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={LaunchScreen} options={{headerShown: false}} />
            <Stack.Screen
                name="Genre"
                component={ListByGenre}
                options={{
                  // title: ({ route }) => ({ title: route.params.genre }),
                  headerStyle: {
                    backgroundColor: '#B00020',
                  },
                  headerTintColor: '#B5A90F',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                // options={({ route }) => ({ title: route.params.genre })}
          
                />
            {/* <Stack.Screen name="Recherche" component={MainBottomNavigator} />*/}
            <Stack.Screen name="Detail" component={DetailScreen} /> 
        </Stack.Navigator>
    )
}
