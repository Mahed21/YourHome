
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';


const DescriptionRent = (props) => {

  const { id } = props.route.params;
  //console.log(props.route.params.id);
  const [Data, SetData] = useState();
  useEffect(() => {
    fetch(`https://quiet-lowlands-93783.herokuapp.com/homes/${id}`)
      .then(res => res.json())
      .then(data => SetData(data));
  }, [])


  let Image_Http_URL = { uri: `${Data?.img}` };


  return (

    <View style={styles.info}>

      <Image source={Image_Http_URL} style={styles.rent_full_img} />
      <Text style={styles.headerText}>Description</Text>
      <View style={styles.text}>
        <Text>Address: {Data?.area}</Text>
        <Text>Rent: {Data?.rent}</Text>
        <Text>Rooms: {Data?.room}</Text>
        <Text>Available Room(s): {Data?.bath}</Text>
        <Text>Available Seat(s): {Data?.requirment}</Text>
        <Text>Ammenities: {Data?.facilities}</Text>
      </View>


      <TouchableOpacity style={styles.regBtn} >
        <Text style={styles.loginText} onPress={() => Alert.alert(Data.contact)}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionRent;

const styles = StyleSheet.create({
  info:
  {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cae6e6',
    margin: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  rent_full_img:
  {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 3,
    borderColor: "#99ccbd",
  },
  headerText: {
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  regBtn: {

    height: 45,
    width: 90,
    marginTop: 15,
    backgroundColor: '#4e6b6b',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },

});