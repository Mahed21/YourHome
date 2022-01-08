import React from 'react'
import { View, Text } from 'react-native'
import DetailsScreen from './Screen/DetailsScreen'
import HomeScreen from './Screen/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();

const Stack=createStackNavigator();

const MenuStack=()=>
{
    return(
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen}/>
       
        </Stack.Navigator>
    )
}



const AppNavigator=()=> {
    

    return (
      
            <Drawer.Navigator initialRouteName='Login'>
            <Drawer.Screen name="Home" component={MenuStack} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
            <Drawer.Screen name="Login" component={Login} />
           
            </Drawer.Navigator>
      
    )
}
export default AppNavigator

