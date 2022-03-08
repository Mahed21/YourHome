import React, { useState, useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const Expense = () => {
  const navigation = useNavigation()
  const [Expense, setExpense] = useState()
  const [Cost, setCost] = useState()
  const [Date, setDate] = useState()
  const [Month, setMonth] = useState()
  const [Year, setYear] = useState()

  const PostExpense = () => {

    const month = Month
    const date = Date
    const year = Year
    const cost = Cost
    const expense = Expense


    const newUser = { cost, date, month, expense, year };
    fetch('https://quiet-lowlands-93783.herokuapp.com/expense', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Meals Added');
          navigation.navigate('Home');
        }
      })

  }

  return (
    <View style={styles.expense}>
      <Text style={styles.headerText}>Add Expenses</Text>
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
          placeholder="Date"
          placeholderTextColor="#003f5c"
          onChangeText={text => setDate(text)}

        />
      </View>

      {/* input year */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Year"
          placeholderTextColor="#003f5c"
          onChangeText={text => setYear(text)}

        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          multiline={true}
          numberOfLines={4}
          placeholder="Expense List"
          placeholderTextColor="#003f5c"
          onChangeText={text => setExpense(text)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Total Cost"
          placeholderTextColor="#003f5c"
          onChangeText={text => setCost(text)}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={PostExpense}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Expense

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
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },
  headerText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
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