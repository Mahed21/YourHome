import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Screen/HomeScreen'
import Login from './App/Screen/Login'
import Register from './App/Screen/Register/Register'




const Stack = createNativeStackNavigator();





const App=()=> {
 
  
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;
