import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './App/AppNavigator';
import firebase from 'firebase/app';
import "firebase/auth";

import React, { useState } from 'react';



const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyA_NlsIxW-sDmfatX5724NmJdl45zJrujs",
    authDomain: "yourhome-8d399.firebaseapp.com",
    projectId: "yourhome-8d399",
    storageBucket: "yourhome-8d399.appspot.com",
    messagingSenderId: "80741234512",
    appId: "1:80741234512:web:cde9323b0f5c48e6a41e55"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });
  
  return (
   <NavigationContainer>
      <AppNavigator/>
   </NavigationContainer>
  );
}
export default App;
