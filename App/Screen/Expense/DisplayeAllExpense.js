import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const DisplayeAllExpense = (props) => {
  const { month, date, year, expense, cost } = props.data

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={4}
              value={month}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputView1}>
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={4}
              value={date}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputView1}>
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={4}
              value={year}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
            />
          </View>

        </View>
        <View style={styles.container}>
          <View style={styles.inputView2}>
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={4}
              value={expense}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputView3}>
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={4}
              value={cost}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
            />
          </View>
        </View>
        <Divider style={{ backgroundColor: '#37342B', height: 2, marginTop: 7 }} />
      </View>
    </ScrollView>
  )
}

export default DisplayeAllExpense

const styles = StyleSheet.create({
  container:
  {
    paddingBottom: 25,
    flexDirection: 'row',

  },
  inputView: {
    marginStart: '2%',
    marginTop: 5,
    width: '25%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

  },
  inputView1: {
    marginStart: '2%',
    marginTop: 5,
    width: '15%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

  },
  inputView2: {
    marginStart: '2%',
    marginTop: 5,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',

  },
  inputView3: {
    marginStart: '2%',
    marginTop: 5,
    width: '15%',
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
})