import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayeAllExpense from './DisplayeAllExpense';

const TotalExpense = (props) => {
    const [Data, setData] = useState([]);
    const [count, setCount] = useState();



    let c = 0;
    useEffect(() => {
        fetch('https://quiet-lowlands-93783.herokuapp.com/expense')
            .then(res => res.json())
            .then(data => {
                setData(data)
                for (var i = 0; i < data.length; i++) {
                    c += parseInt(data[i].cost);
                    setCount(c);

                }
            })


    }
        , [])
    // console.log(count);
    // console.log(Data);
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Total Spend: Tk. {count}</Text>
            <ScrollView>
                {
                    Data.map(data => <DisplayeAllExpense data={data} key={data._id}></DisplayeAllExpense>)
                }
            </ScrollView>


        </View>
    )
}

export default TotalExpense

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    headerText: {
        marginBottom: 10,
        marginTop: 10,
        color: 'black',
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center'
    }
})