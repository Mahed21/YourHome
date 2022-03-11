import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DisplayAllMemberMeal from './DisplayAllMemberMeal'

const MemberMeal = (props) => {
  const { year, month } = props.route.params;
  const [Data, setData] = useState([])
  const [TotalMeal, setTotalMeal] = useState('');
  const [TotalExpense, setTotalExpense] = useState('');
  const [MealRate, setMealRate] = useState(0.00);

  const [loadingData, setLodingData] = useState(true)
  const [lodingTotalMeal, setlodingTotalMeal] = useState(true);
  const [lodingTotalExpense, setlodingTotalExpense] = useState(true);
  const [lodingMealRate, setlodingMealRate] = useState(true);
  let c = 0;
  let d = 0;
  // console.log(year);
  // console.log(month);
  useEffect(() => {
    fetch('https://quiet-lowlands-93783.herokuapp.com/member')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLodingData(false)
      });
  }, [])

  // finding total meal in selected month
  useEffect(() => {
    fetch('https://quiet-lowlands-93783.herokuapp.com/mealCount')
      .then(res => res.json())
      .then(data => {

        for (var i = 0; i < data.length; i++) {


          if (data[i].year == year && data[i].month.toLowerCase() === month.toLowerCase()) {
            c += parseInt(data[i].meal);

            setTotalMeal(c.toString());
            setlodingTotalMeal(false)


          }
        }

      })
  }, [])
  //finding total expence in selected month

  useEffect(() => {
    fetch('https://quiet-lowlands-93783.herokuapp.com/expense')
      .then(res => res.json())
      .then(data => {
        for (var i = 0; i < data.length; i++) {

          //console.log(data[i].meal)

          if (data[i].year == year && data[i].month.toLowerCase() === month.toLowerCase()) {
            d += parseInt(data[i].cost);
            setTotalExpense(d.toString());
            setlodingTotalExpense(false)


          }
        }


        //console.log((parseFloat(TotalExpense / TotalMeal).toFixed(2)))


      })


  }, [])
  useEffect(() => {

    let e = ((TotalExpense / TotalMeal).toFixed(2))
    setMealRate(e)
  }, [TotalExpense, TotalMeal])




  return (
    <View>
      {
        loadingData || lodingTotalExpense || lodingTotalMeal ?
          <Text>Lading</Text> :
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
      }

    </View>
  )
}

export default MemberMeal

const styles = StyleSheet.create({

  headerText: {
    marginTop: 2,
    marginBottom: 5,
    color: 'black',
    fontSize: 18,

    textAlign: 'center'
  },
})