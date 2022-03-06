
import { StyleSheet, Text, View, Image, Button, Alert, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';


const DescriptionRent = (props) => {

  const { id } = props.route.params;
  console.log(props.route.params.id);
  const [Data, SetData] = useState();
  useEffect(() => {
    fetch(`https://quiet-lowlands-93783.herokuapp.com/homes/${id}`)
      .then(res => res.json())
      .then(data => SetData(data));
  }, [])


  let Image_Http_URL = { uri: `${Data?.img}` };


  return (
    <ScrollView>
      <View style={styles.info}>
        <Image source={Image_Http_URL} style={styles.rent_full_img} />

        <View style={styles.text}>
          <Text>Address: {Data?.area}</Text>
          <Text>Rent: {Data?.rent}</Text>
          <Text>Rooms: {Data?.room}</Text>
          <Text>Available Room(s): {Data?.bath}</Text>
          <Text>Available Seat(s): {Data?.requirment}</Text>
          <Text>Ammenities: {Data?.facilities}</Text>
        </View>

        <View style={styles.contact}>
          <Button
            title="Contact"
            color={'#00805a'}
            onPress={() => Alert.alert(Data.contact)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DescriptionRent;

const styles = StyleSheet.create({
  info:
  {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99cccc',
    margin: 20,
    borderRadius: 10,
    padding: 15
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
  contact:
  {
    width: 150,
    marginTop: 20,

  },

  text: {
    marginTop: 20,
    fontWeight: 'bold'

  },

});
