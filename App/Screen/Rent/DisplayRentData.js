import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import React from 'react';

const DisplayRentData = (props) => {
  const { rent, img, area } = props.data;
  let Image_Http_URL = { uri: `${img}` };
  return (
    <View style={styles.container}>
      <Image source={Image_Http_URL} style={styles.rent_img} />
      <View>
        <Text style={styles.rent_name} >{rent}</Text>
        <Text style={styles.rent_name}>{area}</Text>
      </View>
      <View style={styles.buttonText}>
        <Button
          title="Learn More"
          onPress={() => Alert.alert('Suprise!! You got the house')}
        />
      </View>
    </View>

  );
};

export default DisplayRentData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    margin: 5
  },
  buttonText: {
    margin: 10
  },
  rent_img:
  {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10
  },
  rent_name:
  {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});
