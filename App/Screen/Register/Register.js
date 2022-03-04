import React, { useState, useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Register = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {

    auth
      .createUserWithEmailAndPassword(email, password)

      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }





  return (
    <View style={styles.container}>


      <StatusBar style="auto" />
      <View >
        <Image style={styles.img1} source={require("../../../assets/profile.png")} />
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
        />
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconStyle}>
          <AntDesign name={'check'} size={25} color="#666" />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword1(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <View style={styles.iconStyle}>
          <AntDesign name={'login'} size={25} color="#666" />
        </View>
        <Text style={styles.TextInput} >Complete</Text>
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

  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
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

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },


  loginBtn: {
    marginTop: 5,
    marginBottom: 10,
    height: 60,
    width: '100%',
    borderColor: '#ccc',
    backgroundColor: '#e6eaf4',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img1:
  {
    marginBottom: 20,
    marginStart: 20,
    width: 100,
    height: 100
  }
});

export default Register;

