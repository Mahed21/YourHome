import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const DisplayAllMemberMeal = (props) => {
    // console.log(props.year)
    // console.log(props.month)
    let c=0;
    const [count,setCount]=useState()
    const{name}=props.data;
    //console.log(name);
    useEffect(()=>{
        fetch('https://quiet-lowlands-93783.herokuapp.com/mealCount')
        .then(res=>res.json())
        .then(data=>{
            for(var i=0; i<data.length; i++)
            {
                if(data[i].name===name)
                {
                   
                    if(data[i].year==props.year && data[i].month.toLowerCase()===props.month.toLowerCase())
                    {
                       c+=parseInt(data[i].meal);
                       setCount(c.toString());
                      
                       
                    }
                }
            }
        })
    },[])
    
    

  return (
    <View>
       
      <View style={styles.expense}>
          {/* input month */}
          <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    value={name}
                    placeholderTextColor="#003f5c"
                   

                />
            </View>
            {/* input date */}
            <View style={styles.inputView1}>
              
                <TextInput
                    style={styles.TextInput}
                    value={count}
                    placeholderTextColor="#003f5c"
                   

                />
            </View>
           

    </View>
    </View>
  )
}

export default DisplayAllMemberMeal

const styles = StyleSheet.create({
    inputView: {
        marginTop: 5,
        marginBottom: 10,
        width: '80%',
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    
      },
      inputView1: {
        marginTop: 5,
        marginBottom: 10,
        width: '20%',
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
      expense:{
        justifyContent:'center',
        flex:1,
        marginStart:'5%',
        marginEnd:'5%',
        flexDirection:'row'
       },
})