import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const DisplayeIndividualMeal = (props) => {
   //console.log(props.data)
   const{meal,day}=props.meal
  return (
    <View>
        <View style={styles.body}>
        <View style={styles.inputView}>

            <TextInput
            style={styles.TextInput}
            value={day}
            placeholderTextColor="#003f5c"


            />
            </View>
            <View style={styles.inputView}>

                    <TextInput
                    style={styles.TextInput}
                    value={meal}
                    placeholderTextColor="#003f5c"
                

                    />
            </View>
        </View>
    </View>
  )
}

export default DisplayeIndividualMeal

const styles = StyleSheet.create({
    body:
    {
        justifyContent:'center',
        flex:1,
        marginStart:'5%',
        marginEnd:'5%',
        flexDirection:'row',
    },
    inputView: {
        marginTop: 5,
        marginBottom: 10,
        width: '50%',
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