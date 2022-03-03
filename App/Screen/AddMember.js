import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const AddMember = () => {
  const navigation = useNavigation()
    const [Email,setEmail]=useState('')
    const [Name, setName]=useState('')
    const handleMember=()=>
    {
       
        const email= Email;
        const name= Name;
        

        const newUser = {email,name};
        fetch('https://quiet-lowlands-93783.herokuapp.com/member',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>
     {
         if(data.insertedId)
         {
             alert('Thank you for choose us your data is Successfully Collected');
             navigation.replace("Home")
         }
     })
    }
  return (
    <View>
        <View style={styles.addmember}>
            <Text style={styles.addmember_text}>Add Member</Text>
        <View  style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name"
            placeholderTextColor="#003f5c"
           onChangeText={text=>setName(text)}
          />
        </View>
        <View  style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
           onChangeText={text=>setEmail(text)}
          />
        </View>

        <TouchableOpacity
       style={styles.loginBtn} onPress={handleMember}>
       <Text style = {styles.loginText}> Submit </Text>
       </TouchableOpacity>
    </View>
    </View>
  )
}

export default AddMember

const styles = StyleSheet.create({
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
      addmember:
      {
        
        paddingTop:250,
        alignItems: 'center',
      
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
      loginText:
      {
          color:'white'
      },
      addmember_text:
      {
          marginBottom:20,
          fontSize:20,
          color:"#FF1493",

      }
    
})