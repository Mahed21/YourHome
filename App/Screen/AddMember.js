import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StatusBar } from "expo-status-bar";


const AddMember = () => {
  const navigation = useNavigation()
  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const handleMember = () => {

    const email = Email;
    const name = Name;


    const newUser = { email, name };
    fetch('https://quiet-lowlands-93783.herokuapp.com/member', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Thank you for choose us your data is Successfully Collected');
          navigation.replace("Home")
        }
      })
  }
  return (

    <View style={styles.container}>
      <View style={styles.imgDiv}>
        <Image style={styles.img} source={{
          uri: 'https://i.ibb.co/0cnkFmM/profile.png',
        }} />
      </View>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.addmember}>
          <Text
            style={styles.headerText}>Add Member</Text>
          <View style={styles.inputView}>
            <View style={styles.iconStyle}>
              <AntDesign name={'solution1'} size={25} color="#666" />
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="#003f5c"
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <View style={styles.iconStyle}>
              <AntDesign name={'mail'} size={25} color="#666" />
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={text => setEmail(text)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={handleMember}>
            <View style={styles.iconStyle}>
              <AntDesign name={'checksquareo'} size={25} color="#666" />
            </View>
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddMember

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },

  headerText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
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
  loginText:
  {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
  },
  addmember_text:
  {
    fontSize: 30,
    color: "#FF1493",
    textAlign: 'center',
    marginBottom: 50

  },
  img:
  {
    marginBottom: 20,
    marginStart: 20,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})