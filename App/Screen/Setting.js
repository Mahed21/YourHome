import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';






const Setting = () => {
  const navigation = useNavigation()

  const [Admin, setAdmin] = useState(false)

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  useEffect(() => {

    fetch('https://quiet-lowlands-93783.herokuapp.com/member')
      .then(res => res.json())
      .then(data => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].email === auth.currentUser?.email) {
            // console.log(data[i].role);
            if (data[i].role) {
              setAdmin(true)
              return;
            }
          }
          else {
            setAdmin(false)
          }
        }
      })
  }, [])




  return (
    <ScrollView >
      <View>
        {/* div brefore first horizental break */}
        <View style={styles.container}>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons name={'account'} size={50} color="#000000" />
          </View>
          <Text style={styles.setting_user_email}>Email: {auth.currentUser?.email}</Text>

        </View>
        {/* div brefore first horizental break end*/}

        <Divider style={{ backgroundColor: 'black', height: 2, }} />

        {/* div brefore second horizental break*/}
        <View style={{ marginLeft: 10 }}>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'home-outline'} size={33} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Home</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'home-city-outline'} size={30} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Home Rent</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate("PostForRent")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'domain-plus'} size={33} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Post your Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'food'} size={35} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Total Meal</Text>
            </View>
          </TouchableOpacity>
          {
            Admin?
          <TouchableOpacity onPress={() => navigation.navigate("AddMeal")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'food-fork-drink'} size={33} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Add Meal</Text>
            </View>
          </TouchableOpacity>:<Text></Text>
         }
        {
            Admin ?
              <TouchableOpacity onPress={() => navigation.navigate("Expense")}>
                <View style={styles.row}>
                  <View style={styles.iconStyle}>
                    <MaterialCommunityIcons name={'account-cash'} size={33} color="#000000" />
                  </View>
                  <Text style={styles.setting_Text}>Add Expense</Text>
                </View></TouchableOpacity> : <Text></Text>
          }
          {
            Admin ?
              <TouchableOpacity onPress={() => navigation.navigate("AddMember")}>
                <View style={styles.row}>
                  <View style={styles.iconStyle}>
                    <MaterialCommunityIcons name={'account-multiple-plus'} size={33} color="#000000" />
                  </View>
                  <Text style={styles.setting_Text}>Add Member</Text>
                </View></TouchableOpacity> : <Text></Text>
          }




          {/* div brefore second horizental break end*/}
          {/* mess All member */}
          <TouchableOpacity onPress={() => navigation.navigate("MessMember")}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'account-group'} size={33} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>All Member</Text>
            </View></TouchableOpacity>
          <Divider style={{ backgroundColor: 'black', height: 2, }} />

          {/* after second horizental*/}
          <TouchableOpacity onPress={handleSignOut}>
            <View style={styles.row}>
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons name={'logout'} size={33} color="#000000" />
              </View>
              <Text style={styles.setting_Text}>Logout</Text>
            </View>
          </TouchableOpacity>
          {/* after second horizental end */}
        </View>
      </View>
    </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({
  container:
  {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: 'center'
  },

  setting_user_email:
  {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

  },
  setting_Text: {
    color: 'black',
    fontSize: 22,
    marginStart: 10

  },

  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: 'center',
  }

})