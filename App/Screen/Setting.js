import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';






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
          <Image style={styles.setting_img} source={{
            uri: 'https://i.ibb.co/QpNhm72/setting-profile.png'
          }} />
          <Text style={styles.setting_user_email}>Email: {auth.currentUser?.email}</Text>

        </View>
        {/* div brefore first horizental break end*/}

        <Divider style={{ backgroundColor: 'black', height: 2, marginTop: 30 }} />

        {/* div brefore second horizental break*/}
        <View style={{ marginLeft: 10 }}>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/3W5D6Qy/home.png'
              }} />
              <Text style={styles.setting_Text}>Home</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate("RentData")}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/zSJ7QQz/rent.png'
              }} />
              <Text style={styles.setting_Text}>Home Rent</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate("PostForRent")}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/zSJ7QQz/rent.png'
              }} />
              <Text style={styles.setting_Text}>Post your Home</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.row}>
            <Image style={styles.icon} source={{
              uri: 'https://i.ibb.co/x3p9cSj/count.png'
            }} />
            <Text style={styles.setting_Text}>Total Meal</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("AddMeal")}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/QpNhm72/setting-profile.png'
              }} />
              <Text style={styles.setting_Text}>Add Meal</Text>
            </View>
          </TouchableOpacity>

          {
            Admin ?
              <TouchableOpacity onPress={() => navigation.navigate("AddMember")}>
                <View style={styles.row}>
                  <Image style={styles.icon} source={{
                    uri: 'https://i.ibb.co/4FGZBmp/3631618.png'
                  }} />
                  <Text style={styles.setting_Text}>Add Member</Text>
                </View></TouchableOpacity> : <Text></Text>
          }


          {/* div brefore second horizental break end*/}
          {/* mess All member */}
          <TouchableOpacity onPress={() => navigation.navigate("MessMember")}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/4FGZBmp/3631618.png'
              }} />
              <Text style={styles.setting_Text}>All Member</Text>
            </View></TouchableOpacity>
          <Divider style={{ backgroundColor: 'black', height: 2, marginTop: 30 }} />

          {/* after second horizental*/}
          <TouchableOpacity onPress={handleSignOut}>
            <View style={styles.row}>
              <Image style={styles.icon} source={{
                uri: 'https://i.ibb.co/CMqDBcR/logout.png'
              }} />
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
    flexWrap: "wrap"
  },
  setting_img:
  {

    marginStart: 20,
    marginTop: 20,
    width: 70,
    height: 70
  },
  setting_user_email:
  {

    marginStart: 30,
    marginTop: 40,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  setting_Text: {
    color: 'black',
    fontSize: 17,
    marginTop: 35,
    marginStart: 10

  },
  icon:
  {
    marginTop: 30,
    marginStart: 5,
    width: 30,
    height: 30
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  }

})