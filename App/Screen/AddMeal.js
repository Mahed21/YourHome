import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Image,
    ScrollView
} from "react-native";
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostAllMeal from "./PostAllMeal";

const AddMeal = () => {
    const [Date, setDate] = useState()
    const [Month, setMonth] = useState()
    const [Year, setYear] = useState()
    const [Data, SetData] = useState([]);
    //console.log(Date);
    useEffect(() => {
        fetch('https://quiet-lowlands-93783.herokuapp.com/member')
            .then(res => res.json())
            .then(data => SetData(data));
    }, [])
    return (
        <View style={styles.addmealContainer}>
            <View style={styles.addmealtext}>
                <Text>Add Daily Meal</Text>
            </View>
            {/* input month */}
            <View style={styles.inputView}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'user'} size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Month"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setMonth(text)}

                />
            </View>
            {/* input date */}
            <View style={styles.inputView}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'user'} size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Date"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setDate(text)}

                />
            </View>

            {/* input year */}
            <View style={styles.inputView}>
                <View style={styles.iconStyle}>
                    <AntDesign name={'user'} size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Year"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setYear(text)}

                />
            </View>

            <ScrollView>

                {
                    Data.map(data => <PostAllMeal data={data} date={Date} month={Month} year={Year} key={data._id}></PostAllMeal>)
                }
            </ScrollView>


        </View>
    )

}

export default AddMeal

const styles = StyleSheet.create({
    addmealContainer:
    {
        marginTop: 30,
        marginStart: 10,
        marginEnd: 10,
    },
    addmealtext:
    {

        alignItems: 'center'

    }
    ,
    inputView: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
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


})