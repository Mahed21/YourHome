import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayAllMemberMeal from './DisplayAllMemberMeal'

const MemberMeal = (props) => {
  const { year, month } = props.route.params;
  const [Data, setData] = useState([])
  const [TotalMeal,setTotalMeal]=useState('');
  const [TotalExpense,setTotalExpense]=useState('');
  const [MealRate,setMealRate]=useState('');
  let c=0;
  let d=0;
  // console.log(year);
  // console.log(month);
  useEffect(() => {
    fetch('https://quiet-lowlands-93783.herokuapp.com/member')
      .then(res => res.json())
      .then(data => setData(data));
  }, [])
  
  // finding total meal in selected month
  useEffect(()=>{
    fetch('https://quiet-lowlands-93783.herokuapp.com/mealCount')
    .then(res=>res.json())
    .then(data=>{
        for(var i=0; i<data.length; i++)
        {
            
               
                if(data[i].year==year && data[i].month.toLowerCase()===month.toLowerCase())
                {
                   c+=parseInt(data[i].meal);
                  
                    setTotalMeal(c.toString());
                   
                    
                 }
            }
        
    })
},[])
//finding total expence in selected month

useEffect(()=>{
  fetch('https://quiet-lowlands-93783.herokuapp.com/expense')
  .then(res=>res.json())
  .then(data=>{
      for(var i=0; i<data.length; i++)
      {
          
            //console.log(data[i].meal)
             
              if(data[i].year==year && data[i].month.toLowerCase()===month.toLowerCase())
              {
                 d+=parseInt(data[i].cost);
                 setTotalExpense(d.toString());
                 
                  
               }
          }
          let e=((TotalExpense/TotalMeal).toFixed(2))
          setMealRate(e.toString())
          //console.log((parseFloat(TotalExpense/TotalMeal).toFixed(2)))
         
      
  })
 
 
},[])




  return (
    <View>
      <Text style={styles.headerText}>All Member Total Meals</Text>
      <Text style={styles.headerText}>Month : {month}</Text>
      <Text style={styles.headerText}>Year: {year}</Text>
      <Text style={styles.headerText}>Total Meal: {TotalMeal}</Text>
      <Text style={styles.headerText}>Total Expense: {TotalExpense}</Text>
      <Text style={styles.headerText}>Meal Rate: {MealRate}</Text>
      
      <ScrollView>

        {
          Data.map(data => <DisplayAllMemberMeal data={data} year={year}
            month={month} mealRate={MealRate} key={data._id}></DisplayAllMemberMeal>)
        }
      </ScrollView>
    </View>
  )
}

export default MemberMeal

const styles = StyleSheet.create({

  headerText: {
    marginTop:2,
    marginBottom: 5,
    color: 'black',
    fontSize: 18,
    
    textAlign: 'center'
  },
})