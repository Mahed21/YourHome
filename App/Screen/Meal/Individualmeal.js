import { StyleSheet, Text, View,ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayeIndividualMeal from './DisplayeIndividualMeal';


const Individualmeal = (props) => {
    const { year,month,name,mealRate} = props.route.params;
    // console.log(year);
    // console.log(month);
    // console.log(name);
     // console.log(mealRate);
    const [indiMeal,setIndiMeal]=useState([])
    const [CountMeal,setCountMeal]= useState('')
    const [indMealRate, setIndiMealRate]=useState('');
    const mealBucket=[];
    let count=0;

    useEffect(()=>
    {
        fetch('https://quiet-lowlands-93783.herokuapp.com/mealCount')
        .then(res=>res.json())
        .then(data=>{
            for(var i=0; i<data.length; i++)
            {
                if(data[i].name===name)
                {
                    count+=parseInt(data[i].meal);
                   setCountMeal(count.toString());
                   
                    if(data[i].year==year && data[i].month.toLowerCase()===month.toLowerCase())
                    {
                        mealBucket.push(data[i])
                       
                       
                    }
                }
            }
            
            setIndiMeal(mealBucket);
        })
       setIndiMealRate(parseFloat((mealRate)*CountMeal).toFixed(2))

    },[])
    
   
   
  return (
    <View>
         <View style={styles.Individualtext}>
             <Text>{name}</Text>
             <Text>Month: {month}</Text>
             <Text>Year: {year}</Text>
             <Text>Total Meal : {CountMeal}</Text>
             <Text>Meal Cost : {indMealRate}</Text>
           
         </View>
        <View style={styles.body}>
        <View style={styles.inputView}>

            <TextInput
            style={styles.TextInput}
            placeholder={'Date'}
            placeholderTextColor="#003f5c"


            />
            </View>
            <View style={styles.inputView}>

                    <TextInput
                    style={styles.TextInput}
                    value={'Meal'}
                    placeholderTextColor="#003f5c"
                

                    />
            </View>
        </View>
         <ScrollView>
             {
             indiMeal.map (meal=> <DisplayeIndividualMeal meal={meal}  key={meal._id} TotalMeal={count}></DisplayeIndividualMeal>)
             }
                    
                
            </ScrollView> 
    </View>
  )
}

export default Individualmeal

const styles = StyleSheet.create({
    Individualtext:
    {
        marginTop:'10%',
        alignItems:'center'
    },
    body:
    {
        justifyContent:'center',
        flex:1,
        marginStart:'5%',
        marginEnd:'5%',
        flexDirection:'row',
        marginBottom:'15%'
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