 
import { StyleSheet, Text, View,Image, Button,Alert,Modal} from 'react-native';
import React, { useEffect, useState } from 'react';


const DescriptionRent = (props) => {

 const {id}=props.route.params;
 console.log(props.route.params.id);
 const [Data,SetData]=useState();
 useEffect(()=>
 {
     fetch(`https://afternoon-ravine-00687.herokuapp.com/homes/${id}`)
     .then(res=>res.json())
     .then(data=>SetData(data));
 },[])


 let Image_Http_URL = { uri: `${Data?.img}` };
 
 


 
 

  return (
    <View>
       <Image source={Image_Http_URL} style={styles.rent_full_img} />

      <View style={styles.text}>
     <Text>{Data?.area}</Text>
     

      <Text>{Data?.rent}</Text>
      <Text>{Data?.room}</Text>
      <Text>{Data?.bath}</Text>
      <Text>{Data?.requirment}</Text>
      <Text>{Data?.facilities}</Text>
      </View>

      <View style={styles.contact}>
     <Button
      title="Contact" 
      onPress={() => Alert.alert(Data.contact)}
      />  
      </View>
    
      
      
    </View>
  );
};

export default DescriptionRent;

const styles = StyleSheet.create({
rent_full_img:
  {
    width: 400,
    height: 400,
    marginLeft:5,
    borderRadius: 10
  },
  contact:
  {
    width:150,
    marginTop:20,
    marginLeft:120
   
  },
 
  text:{
   marginLeft:20,
   marginTop:20,

  },
 
});
