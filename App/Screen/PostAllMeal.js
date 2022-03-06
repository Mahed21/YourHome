import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Image,
} from "react-native";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddMeal from "./AddMeal";


const PostAllMeal = (props) => {

    const navigation = useNavigation()
    const { name, email } = props.data;
    const [Name, setName] = useState();
    const [Meal, setMeal] = useState();

    const handleMeal = () => {
        // console.log(Meal);
        // console.log(name);
        // console.log(props.date)
        // console.log(props.month)
        // console.log(props.year);
        const name = Name;
        const meal = Meal;
        const month = props.month
        const day = props.date
        const year = props.year


        const newUser = { name, meal, month, day, year };
        fetch('https://quiet-lowlands-93783.herokuapp.com/mealCount', {
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
                }
            })

    }


    return (

        <View style={styles.parents} >
            <View style={styles.inputView}>
                {/* <View style={styles.iconStyle}>
          <AntDesign name={'user'} size={25} color="#666" />
        </View> */}
                <TextInput
                    style={styles.TextInput}
                    value={name}
                    placeholderTextColor="#003f5c"

                />
            </View>
            {/* add meal inputView */}
            <View style={styles.inputView1}>
                {/* <View style={styles.iconStyle}>
          <AntDesign name={'user'} size={25} color="#666" />
        </View> */}
                <TextInput
                    style={styles.TextInput}
                    placeholder="Add Meal"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setMeal(text)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleMeal}>
                <Text style={styles.loginText} >Submit</Text>
            </TouchableOpacity>

        </View>

    )
}

export default PostAllMeal

const styles = StyleSheet.create({
    parents:
    {
        flex: 1,
        flexDirection: "row",
    },
    inputView: {
        marginTop: 5,
        marginBottom: 10,
        width: '50%',

        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    inputView1: {
        marginStart: '2.5%',
        marginTop: 5,
        marginBottom: 10,
        width: '25%',
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    iconStyle: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        textAlign: 'center'
    },

    loginBtn: {
        width: '20%',
        marginTop: 5,
        marginBottom: 10,
        height: 60,
        borderColor: '#ccc',
        backgroundColor: '#f5e7ea',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: '2.5%',
    },
    loginText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 13,
    },

})