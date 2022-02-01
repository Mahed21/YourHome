import React, { useState,useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
  } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'


const Login=(props)=>
{
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
       .catch(error => alert(error.message))
  }
  
    return (
        <View style={styles.container}>
      
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
             onChangeText={text=>setPassword(text)}
          />
        </View>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText} onPress={handleLogin}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText} onPress={() =>props.navigation.navigate("Register")}>Register</Text>
      </TouchableOpacity> 
    
     </View>

      
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
  
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

export default Login;



