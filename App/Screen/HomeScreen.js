import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from 'react-native'
import Constants from 'expo-constants';
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const HomeScreen = (props) => {
  const navigation = useNavigation()
  const image = { uri: "https://cdn.pixabay.com/photo/2017/06/14/01/43/background-2400765_960_720.jpg" };





  return (



    <ScrollView >
      <View >
        <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
          <View style={styles.position_icon}>
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <AntDesign name={'setting'} size={28} color="#fff" />
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
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'home-outline'} size={33} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Available For Rent</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("PostForRent")}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'domain-plus'} size={30} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Post For Rent</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* homeScreen Button Row end*/}

        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'food-fork-drink'} size={30} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Meal Count</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("TotalExpense")}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'account-cash'} size={30} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Total Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.home_row}>
          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'calendar'} size={30} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Calendar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rent_button}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'calculator'} size={30} color="#000000" />
              </View>
              <Text style={styles.rent_text}>Calculator</Text>
            </TouchableOpacity>
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
    paddingTop: '20%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    flex: 1,
    height: 160,

  },

  titleText: {
    fontSize: 30,
    marginBottom: 10,
    paddingLeft: 30,
    color: 'white',
  },
  title_email: {
    fontSize: 20,
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
    flexDirection: "row",
    flexWrap: "wrap"
  },

  rent_button:
  {
    borderWidth: 3,
    borderColor: '#B8BBC3',
    width: 160,
    height: 90,
    marginTop: 10,
    borderRadius: 10,
    marginStart: 8,
    marginEnd: 10,
    backgroundColor: '#e6eaf4',
  },
  rent_text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16

  },
  setting_icon:
  {
    width: 30,
    height: 30,


  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  position_icon:
  {

    alignItems: 'flex-end',
    paddingEnd: 10,
    marginTop: 30

  }
})
export default HomeScreen;