import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native';


const PostForRent = () => {
    const navigation = useNavigation()

    const imgRef = useRef();
    const areaRef = useRef();
    const rentRef = useRef();
    const contactRef = useRef();
    const facilitesRef = useRef();
    const roomRef = useRef();
    const requirmentRef = useRef();
    const bathRef = useRef();


    const handleSubmit=()=>
    {
       
        const img=imgRef.current.value;
        const area=areaRef.current.value;
        const rent=rentRef.current.value;
        const contact=contactRef.current.value;
        const facilities=facilitesRef.current.value;
        const room=roomRef.current.value;
        const requirment=requirmentRef.current.value;
        const bath=bathRef.current.value;

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
       ref={imgRef}
       />
     
    
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Location"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={areaRef}
       />

<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "House Rent"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={rentRef}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Number of Room"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={contactRef}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Number of Bathroom"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={facilitesRef}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Total Number of Member can live"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={roomRef}
       />


<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "What the Facilities"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={requirmentRef}
       />

<TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Contact Number"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       ref={bathRef}
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