import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayAllMemberMeal from './DisplayAllMemberMeal'

const MemberMeal = (props) => {
    const { year,month } = props.route.params;
    const [Data,setData]=useState([])
    // console.log(year);
    // console.log(month);
    useEffect(()=>{
        fetch('https://quiet-lowlands-93783.herokuapp.com/member')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
  return (
    <View>
      
      <ScrollView>
          
          {
              Data.map(data=><DisplayAllMemberMeal data={data} year={year}
                month={month} key={data._id}></DisplayAllMemberMeal>)
          }
      </ScrollView>
    </View>
  )
}

export default MemberMeal

const styles = StyleSheet.create({})