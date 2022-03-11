import 'react-native-gesture-handler';
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
import MessMember from './App/Screen/MessMember';
import AddMember from './App/Screen/AddMember';
import AddMeal from './App/Screen/AddMeal';
import Expense from './App/Screen/Expense/Expense';
import TotalExpense from './App/Screen/Expense/TotalExpense';
import Search from './App/Screen/Meal/Search';
import MemberMeal from './App/Screen/Meal/MemberMeal';
import OnboardingScreen from './App/Screen/OnboardingScreen';
import Individualmeal from './App/Screen/Meal/Individualmeal';








const Stack = createNativeStackNavigator();





const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: true }} name="RentData" component={RentData} />
        <Stack.Screen options={{ headerShown: true }} name="DescriptionRent" component={DescriptionRent} />
        <Stack.Screen options={{ headerShown: true }} name="PostForRent" component={PostForRent} />
        <Stack.Screen options={{ headerShown: true }} name="Setting" component={Setting} />
        <Stack.Screen options={{ headerShown: true }} name="Calculator" component={Calculator} />
        <Stack.Screen options={{ headerShown: true }} name="Calendar" component={Calendar} />
        <Stack.Screen options={{ headerShown: true }} name="AddMember" component={AddMember} />
        <Stack.Screen options={{ headerShown: true }} name="MessMember" component={MessMember} />
        <Stack.Screen options={{ headerShown: true }} name="AddMeal" component={AddMeal} />
        <Stack.Screen options={{ headerShown: true }} name="Expense" component={Expense} />
        <Stack.Screen options={{ headerShown: true }} name="TotalExpense" component={TotalExpense} />
        <Stack.Screen options={{ headerShown: true }} name="Search" component={Search} />
        <Stack.Screen options={{ headerShown: true }} name="MemberMeal" component={MemberMeal} />
        <Stack.Screen options={{ headerShown: true }} name="Individualmeal" component={Individualmeal} />




      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;
