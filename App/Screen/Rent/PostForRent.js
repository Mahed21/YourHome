import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PostForRent = () => {
   const navigation = useNavigation()

   // const imgRef = useRef();
   // const areaRef = useRef();
   // const rentRef = useRef();
   // const contactRef = useRef();
   // const facilitesRef = useRef();
   // const roomRef = useRef();
   // const requirmentRef = useRef();
   // const bathRef = useRef();

   const [image, setImage] = useState('');
   const [Area, setarea] = useState('');
   const [Rent, setrent] = useState('');
   const [Contact, setcontact] = useState('');
   const [Facilities, setfacilities] = useState('');
   const [Room, setroom] = useState('');
   const [Requirment, setrequirment] = useState('');
   const [Bath, setbath] = useState('');


   const handleSubmit = () => {

      const img = image;
      const area = Area;
      const rent = Rent;
      const contact = Contact;
      const facilities = Facilities;
      const room = Room;
      const requirment = Requirment;
      const bath = Bath;

      const newUser = { img, area, rent, contact, facilities, room, requirment, bath };
      fetch('https://quiet-lowlands-93783.herokuapp.com/homes', {
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
      <ScrollView>
         <View style={styles.container}>
            <Text
               style={{
                  marginTop: 20,
                  marginBottom: 10,
                  color: 'black',
                  fontSize: 25,
                  fontWeight: "bold",
                  alignSelf: "center",
               }}>Give Your Home For Rent</Text>
            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Image Url"
                  autoCapitalize="none"
                  //    ref={imgRef}
                  onChangeText={text => setImage(text)}
               />
            </View>
            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Location"
                  autoCapitalize="none"
                  //    ref={areaRef}
                  onChangeText={text => setarea(text)}
               />
            </View>
            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="House Rent"
                  autoCapitalize="none"
                  // ref={rentRef}
                  onChangeText={text => setrent(text)}
               />
            </View>

            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Number of Room"
                  autoCapitalize="none"
                  // ref={contactRef}
                  onChangeText={text => setcontact(text)}
               />
            </View>
            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Number of Bathroom"
                  autoCapitalize="none"
                  //ref={facilitesRef}
                  onChangeText={text => setfacilities(text)}
               />
            </View>

            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Total Number of Member can live"
                  autoCapitalize="none"
                  //ref={roomRef}
                  onChangeText={text => setroom(text)}
               />
            </View>

            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="What the Facilities"
                  autoCapitalize="none"
                  // ref={requirmentRef}
                  onChangeText={text => setrequirment(text)}
               />
            </View>
            <View style={styles.inputView}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'lock'} size={25} color="#666" />
               </View>
               <TextInput style={styles.TextInput}
                  underlineColorAndroid="transparent"
                  placeholder="Contact Number"
                  autoCapitalize="none"
                  //ref={bathRef}
                  onChangeText={text => setbath(text)}
               />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
               <View style={styles.iconStyle}>
                  <AntDesign name={'login'} size={25} color="#666" />
               </View>
               <Text style={styles.loginText}> Submit </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   )
}

export default PostForRent

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
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
   iconStyle: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
   },
   TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      textAlign: 'center'
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   loginBtn: {
      marginTop: 5,
      marginBottom: 10,
      height: 60,
      width: '100%',
      borderColor: '#ccc',
      backgroundColor: '#e6eaf4',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   loginText: {
      flex: 1,
      textAlign: 'center',
      fontSize: 13,
   },
})