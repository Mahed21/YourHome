import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

const DisplayRentData = (props) => {
    const {rent,img,area}=props.data;
    let Image_Http_URL ={ uri: `${img}`};
  return (
    <View>
        <Image source={Image_Http_URL} style={styles.rent_img}/>
        <View style={styles.rent_name}>
      <Text >{rent}</Text>
      <Text>{area}</Text>
      </View>
    </View>
  );
};

export default DisplayRentData;

const styles = StyleSheet.create({
    rent_img:
    {
      marginBottom:20,
      marginStart:100,
      width:200,
      height:200
    },
    rent_name:
    {
        marginBottom:20,
        marginStart:150,

    }
});
