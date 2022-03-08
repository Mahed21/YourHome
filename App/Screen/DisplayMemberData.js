import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


const DisplayMemberData = (props) => {

  const { name, email } = props.data
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.member}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </ScrollView>
  )
}

export default DisplayMemberData

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  member: {
    fontSize: 20
  }
})