import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Screen/HomeScreen'
import Login from './App/Screen/Login'
import Register from './App/Screen/Register/Register'
import RentData from './App/Screen/Rent/RentData';
import DescriptionRent from './App/Screen/Rent/DescriptionRent';
import PostForRent from './App/Screen/Rent/PostForRent';
import Setting from './App/Screen/Setting';
import Calculator from './App/Screen/Calculator';
import Calendar from './App/Screen/Calendar';







const Stack = createNativeStackNavigator();





const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: true }} name="RentData" component={RentData} />
        <Stack.Screen options={{ headerShown: true }} name="DescriptionRent" component={DescriptionRent} />
        <Stack.Screen options={{ headerShown: true }} name="PostForRent" component={PostForRent} />
        <Stack.Screen options={{ headerShown: true }} name="Setting" component={Setting} />
        <Stack.Screen options={{ headerShown: true }} name="Calculator" component={Calculator} />
        <Stack.Screen options={{ headerShown: true }} name="Calendar" component={Calendar} />



      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;
