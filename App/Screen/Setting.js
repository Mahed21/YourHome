import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';






const Setting = () => {
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
    <View>
      {/* div brefore first horizental break */}
       <View style={styles.container}>
         <Image style={styles.setting_img} source={{
          uri: 'https://i.ibb.co/QpNhm72/setting-profile.png'
        }}/>
         <Text style={styles.setting_user_email}>Email: {auth.currentUser?.email}</Text>
        
        </View>
        {/* div brefore first horizental break end*/}

        <Divider style={{ backgroundColor: 'black',height:2,marginTop:30 }} />

        {/* div brefore second horizental break*/}
        <View  style={{ marginLeft:10}}>
          
          <TouchableOpacity onPress={() =>navigation.navigate("Home")}>
          <View style={styles.row}>
          <Image style={styles.icon} source={{
          uri: 'https://i.ibb.co/3W5D6Qy/home.png'
        }} />
          <Text style={styles.setting_Text}>Home</Text>
          </View>
          </TouchableOpacity>
          
          
          <TouchableOpacity onPress={() =>navigation.navigate("RentData")}>
          <View style={styles.row}>
          <Image style={styles.icon} source={{
          uri: 'https://i.ibb.co/zSJ7QQz/rent.png'
        }} />
          <Text style={styles.setting_Text}>Home Rent</Text>
          </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() =>navigation.navigate("PostForRent")}>
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

          <View style={styles.row}>
          <Image style={styles.icon} source={{
          uri: 'https://i.ibb.co/QpNhm72/setting-profile.png'
        }} />
          <Text style={styles.setting_Text}>Add Meal (Only for Admin)</Text>
          </View>
          {/* div brefore second horizental break end*/}


          <Divider style={{ backgroundColor: 'black',height:2,marginTop:30 }} />
          
          {/* after second horizental*/}
         <TouchableOpacity onPress={handleSignOut}>
         <View style={styles.row}>
          <Image style={styles.icon} source={{
          uri: 'https://i.ibb.co/CMqDBcR/logout.png'
        }}/>
          <Text style={styles.setting_Text}>Logout</Text>
         </View>
         </TouchableOpacity>
          {/* after second horizental end */}
        </View>
        

        

  
       
  
    </View>
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

    marginStart:20,
    marginTop:20,
    width:70,
    height:70
  },
  setting_user_email:
  {
    
    marginStart:30,
    marginTop:40,
    color:'black',
    fontWeight:'bold',
    fontSize: 15,
  },
  setting_Text:{
    color:'black',
    fontSize: 17,
    marginTop:35,
    marginStart:10

  },
  icon:
  {
    marginTop:30,
    marginStart:5,
    width:30,
    height:30
  },
  row:{
    flexDirection: "row",
    flexWrap: "wrap"
  }
    
})