import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const DisplayMemberData = (props) => {
    
    const{name,email}=props.data
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}

export default DisplayMemberData

const styles = StyleSheet.create({})