import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import firebase from 'firebase/app';
import "firebase/auth"

const Register=()=>
{
          const [values, setValues] = useState({
            email: "",
            pwd: "",
            pwd2: ""
        })

        function handleChange(text, eventName) {
            setValues(prev => {
                return {
                    ...prev,
                    [eventName]: text
                }
            })
        }

        function SignUp() {

            const { email, pwd, pwd2 } = values

            if (pwd == pwd2) {
                firebase.auth().createUserWithEmailAndPassword(email, pwd)
                    .then(() => {
                    })
                    .catch((error) => {
                        alert(error.message)
                        // ..
                    });
            } else {
                alert("Passwords are different!")
            }
        }
    return (
        <View style={styles.container}>
      
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={text => handleChange(text, "email")}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => handleChange(text, "pwd")}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => handleChange(text, "pwd2")}
          />
        </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={()=>SignUp()}>Sign In</Text>
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

export default Register;

