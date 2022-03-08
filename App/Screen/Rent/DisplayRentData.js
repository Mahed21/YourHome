import { StyleSheet, Button, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const DisplayRentData = (props) => {

  const navigation = useNavigation();



  const { rent, img, area, _id } = props.data;
  let Image_Http_URL = { uri: `${img}` };



  return (

    <View style={styles.container}>
      <Image source={Image_Http_URL} style={styles.rent_img} />
      <View>
        <Text style={styles.rent_name} >Rent: {rent}</Text>
        <Text style={styles.rent_name}>Address: {area}</Text>
      </View>
      <View style={styles.buttonText}>
        <TouchableOpacity style={styles.regBtn} >
          <Text style={styles.loginText} onPress={() => navigation.navigate('DescriptionRent', { id: _id })}>View More</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
};

export default DisplayRentData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cae6e6',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 12,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    margin: 10
  },
  rent_img:
  {
    width: 170,
    height: 170,
    margin: 10,
    borderRadius: 10
  },
  rent_name:
  {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  regBtn: {

    height: 50,
    width: 110,
    backgroundColor: '#4e6b6b',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },
});
