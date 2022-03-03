import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import DisplayRentData from './DisplayRentData';


const RentData = () => {
    const [Data, SetData]=useState([]);
    useEffect(()=>
    {
        fetch('https://quiet-lowlands-93783.herokuapp.com/homes')
        .then(res=>res.json())
        .then(data=>SetData(data));
    },[])
  return (
    <View style={styles.rent}>
      
      <ScrollView>
          {
              Data.map(data=><DisplayRentData data={data} key={data._id}></DisplayRentData>)
          }
      </ScrollView>
    </View>
  );
};

export default RentData;

const styles = StyleSheet.create({
    rent:
    {
        marginLeft:10,
        marginTop:10,
    }
});
