import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image,ScrollView } from 'react-native'
import Constants from 'expo-constants';
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native';




const HomeScreen = (props) => {
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


    
    <ScrollView >
      <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>YourHome</Text>
      </View>

      <View >
        <Text>Email: {auth.currentUser?.email}</Text>
      </View>

      <View style={styles.rent_button}>
        <TouchableOpacity onPress={() =>navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Available mess rent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rent_button}>
        <TouchableOpacity onPress={() =>navigation.navigate("PostForRent")}>
          <Text style={styles.rent_text}>Post For Rent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Meal Count</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Total Expenses</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Notepad</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
          <Text style={styles.rent_text}>Calculator</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.other_button}>
        <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
          <Text style={styles.rent_text}>Announcement</Text>
        </TouchableOpacity>
      </View>
      <View >

        <TouchableOpacity onPress={handleSignOut}>
          <Image style={styles.logout_img} source={require("../../assets/shutdown.png")} />
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView >
  )
}
const styles = StyleSheet.create({
  // view:{
  //     paddingTop:Platform.OS==='ios'?0: Constants.statusBarHeight,
  //     paddingLeft:8,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  logout_img:
  {
    alignItems: 'center',
    marginTop: 50,
    width: 50,
    height: 50,

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
  other_button:
  {
    width: 200,
    height: 70,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'blue',

  },
  rent_button:
  {
    width: 200,
    height: 70,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'crimson',
  },
  rent_text: {
    textAlign: 'center',
    color: '#000000',
    marginTop: 25
  }
})
export default HomeScreen;

