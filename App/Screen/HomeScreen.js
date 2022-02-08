import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import Constants from 'expo-constants';
import {auth} from '../../firebase'
import { useNavigation } from '@react-navigation/native';




const HomeScreen=(props)=> {
  const navigation = useNavigation()

  const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
   
      
    return (
      
        
     
      <View style={styles.container}>
         <View >
           <TouchableOpacity onPress={handleSignOut}>
         <Image style={styles.logout_img} source = {require("../../assets/shutdown.png")}/>
         </TouchableOpacity>
         <Text>Email: {auth.currentUser?.email}</Text>
        </View>
        <View style={styles.rent_button}>
          <TouchableOpacity onPress={() =>props.navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Available mess rent</Text>
          </TouchableOpacity>
        </View>
        
      
    </View>
    
            
       
    )
}
const styles= StyleSheet.create({
    // view:{
    //     paddingTop:Platform.OS==='ios'?0: Constants.statusBarHeight,
    //     paddingLeft:8,
    // },
    container: {
        flex: 1,
         alignItems: 'center',
         marginTop:20
      },
  
     
      logout_img:
      {
       marginStart:310,
       width:50,
       height:50,
      
      },
      button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      rent_button:
      {
        width:200,
        height:50,
        marginTop:10,
        backgroundColor:'crimson',
      

      },
      rent_text:{
        marginStart:30,
        marginTop:15,

      }
})
export default HomeScreen;

