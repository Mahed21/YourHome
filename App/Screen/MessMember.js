import { ScrollView, StyleSheet, View,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayMemberData from './DisplayMemberData';

const MessMember = () => {
    const [Data, SetData]=useState([]);
    useEffect(()=>
    {
        fetch('https://quiet-lowlands-93783.herokuapp.com/member')
        .then(res=>res.json())
        .then(data=>SetData(data));
    },[])
  return (
    <View style={styles.rent}>
      
      <ScrollView>
          {
              Data.map(data=><DisplayMemberData data={data} key={data._id}></DisplayMemberData>)
          }
      </ScrollView>
    </View>
    
  )
}

export default MessMember

const styles = StyleSheet.create({
    rent:
    {
        marginLeft:10,
        marginTop:10,
    }
})