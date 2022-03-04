import React, { useState, useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Login = (props) => {
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

      <View >
        <Image style={styles.img} source={{
          uri: 'https://i.ibb.co/0cnkFmM/profile.png',
        }} />
      </View>
      <View style={styles.inputView}>
        <View style={styles.iconStyle}>
          <AntDesign name={'user'} size={25} color="#666" />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconStyle}>
          <AntDesign name={'lock'} size={25} color="#666" />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}

          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>

        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} >
        <View style={styles.iconStyle}>
          <AntDesign name={'login'} size={25} color="#666" />
        </View>
        <Text style={styles.loginText} onPress={handleLogin}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regBtn} >
        <View style={styles.iconStyle}>
          <AntDesign name={'form'} size={25} color="#666" />
        </View>
        <Text style={styles.loginText} onPress={() => navigation.navigate("Register")}>Register</Text>
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
    padding: 20
  },


  inputView: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },

  forgot_button: {
    fontSize: 13,
    fontWeight: '500',
    color: '#191970',
    marginBottom: 10,
    marginLeft: 35
  },


  loginBtn: {
    marginTop: 5,
    marginBottom: 10,
    height: 60,
    width: '100%',
    borderColor: '#ccc',
    backgroundColor: '#f5e7ea',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  regBtn: {

    height: 60,
    width: '100%',
    borderColor: '#ccc',
    backgroundColor: '#e6eaf4',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
  },
  img:
  {
    marginBottom: 20,
    marginStart: 20,
    width: 100,
    height: 100,
    resizeMode: 'cover'
  }
});

export default Login;



