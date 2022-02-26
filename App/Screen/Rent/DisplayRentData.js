import { StyleSheet, Button, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


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
        <TouchableOpacity>
          <Button
            title='view more'
            color={'#00805a'}
            onPress={() => navigation.navigate('DescriptionRent', {
              id: _id
            })} />
        </TouchableOpacity>

      </View>
    </View>

  );
};

export default DisplayRentData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#99cccc',
    borderRadius: 10,
    marginBottom:10,
    marginRight:12
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
  }
});
