import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React, { useRef,useState } from 'react'
import { useNavigation } from '@react-navigation/native';


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

    const [image,setImage]= useState('');
    const [Area,setarea]= useState('');
    const [Rent,setrent]= useState('');
    const [Contact,setcontact]= useState('');
    const [Facilities,setfacilities]= useState('');
    const [Room,setroom]= useState('');
    const [Requirment,setrequirment]= useState('');
    const [Bath,setbath]= useState('');


    const handleSubmit=()=>
    {
       
        const img= image;
        const area= Area;
        const rent= Rent;
        const contact=Contact;
        const facilities=Facilities;
        const room=Room;
        const requirment=Requirment;
        const bath=Bath;

        const newUser = {img,area,rent,contact,facilities,room,requirment,bath};
        fetch('https://afternoon-ravine-00687.herokuapp.com/homes',{
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
      <ScrollView>
    <View style = {styles.container}>
          <Text
                 style={{
                     marginTop:20,
                     marginBottom:10,
                     color:'black',
                     fontSize:25,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Give Your Home For Rent</Text>
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Image Url"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
    //    ref={imgRef}
       onChangeText={text => setImage(text)}
       />
     
    
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Location"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
    //    ref={areaRef}
    onChangeText={text => setarea(text)}
       />

<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "House Rent"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
      // ref={rentRef}
      onChangeText={text => setrent(text)}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Number of Room"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
      // ref={contactRef}
      onChangeText={text => setcontact(text)}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Number of Bathroom"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       //ref={facilitesRef}
       onChangeText={text => setfacilities(text)}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Total Number of Member can live"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       //ref={roomRef}
       onChangeText={text => setroom(text)}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "What the Facilities"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
      // ref={requirmentRef}
      onChangeText={text => setrequirment(text)}
       />

<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Contact Number"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       //ref={bathRef}
       onChangeText={text => setbath(text)}
       />
      
    
    <TouchableOpacity
       style = {styles.submitButton} onPress={handleSubmit}>
       <Text style = {styles.submitButtonText}> Submit </Text>
    </TouchableOpacity>
 </View>
 </ScrollView>
  )
}

export default PostForRent

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
     },
     input: {
        paddingStart:10,
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 2
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white',
        alignSelf:"center",
     }
})