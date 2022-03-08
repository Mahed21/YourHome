import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const Search = () => {
  const [Month, setMonth] = useState()
  const [Year, setYear] = useState()
  const navigation = useNavigation()

  return (

    <View style={styles.expense}>
      <Text
        style={styles.headerText}>Search for Month</Text>
      {/* input month */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Month"
          placeholderTextColor="#003f5c"
          onChangeText={text => setMonth(text)}

        />
      </View>
      {/* input date */}
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Year"
          placeholderTextColor="#003f5c"
          onChangeText={text => setYear(text)}

        />
      </View>


      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('MemberMeal', {
        year: Year, month: Month
      })} >
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Search

const styles = StyleSheet.create({
  inputView: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',

  },

  headerText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },
  expense: {
    flex: 1,
    marginStart: '5%',
    marginTop: '5%',
    marginEnd: '5%',
  },
  loginBtn: {
    marginTop: 5,
    marginBottom: 10,
    height: 60,
    width: '100%',
    borderColor: '#ccc',
    backgroundColor: '#f5e7ea',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
  },
})