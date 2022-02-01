import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from 'expo-constants';
import {auth} from '../../firebase'
import { useNavigation } from '@react-navigation/native';



const HomeScreen=()=> {
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
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center'
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
})
export default HomeScreen;

