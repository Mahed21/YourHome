import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from 'react-native'
import Constants from 'expo-constants';
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';




const HomeScreen = (props) => {
  const navigation = useNavigation()
  const image = { uri: "https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };





  return (



    <ScrollView >
      <View >
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.position_icon}>
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <AntDesign name={'setting'} size={25} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.position_Text}>
            <View>
              <Text style={styles.titleText}>YourHome</Text>
            </View>

            <View >
              <Text style={styles.title_email}>Email: {auth.currentUser?.email}</Text>
            </View>
          </View>
        </ImageBackground>

      </View>


      <View style={styles.container}>

        {/* homeScreen Button Row */}
        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
              <Text style={styles.rent_text}>Available mess rent</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("PostForRent")}>
              <Text style={styles.rent_text}>Post For Rent</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* homeScreen Button Row end*/}

        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
              <Text style={styles.rent_text}>Meal Count</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
              <Text style={styles.rent_text}>Total Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
              <Text style={styles.rent_text}>Notepad</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
              <Text style={styles.rent_text}>Calculator</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
              <Text style={styles.rent_text}>Calendar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
              <Text style={styles.rent_text}>Announcement</Text>
            </TouchableOpacity>
          </View>
          <View >
          </View>


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

  },
  image: {
    flex: 1,

    height: 200,
  },

  titleText: {
    fontSize: 24,
    marginBottom: 10,
    paddingLeft: 30,
    color: 'white',
  },
  title_email: {

    paddingLeft: 30,
    color: 'white',

  },
  position_Text:
  {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15

  },
  home_row:
  {
    flexDirection: "column",
    flexWrap: "wrap"
  },



  rent_button:
  {
    width: 180,
    height: 70,
    marginTop: 20,
    borderRadius: 10,
    marginStart: 8,
    marginEnd: 10,
    backgroundColor: 'crimson',
  },
  rent_text: {
    textAlign: 'center',
    color: 'white',
    marginTop: 25,

  },
  setting_icon:
  {
    width: 30,
    height: 30,


  },
  position_icon:
  {

    alignItems: 'flex-end',
    paddingEnd: 10,
    paddingTop: 10

  }
})
export default HomeScreen;