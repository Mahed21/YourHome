import React from 'react'
import { View, Text,SafeAreaView,StyleSheet,Platform} from 'react-native';
import Constants from 'expo-constants';



const HomeScreen=()=> {
    return (
      
            <SafeAreaView>
            <View style={styles.view}>
            <Text>home screen</Text>
            </View>
            </SafeAreaView>
            
       
    )
}
const styles= StyleSheet.create({
    view:{
        paddingTop:Platform.OS==='ios'?0: Constants.statusBarHeight,
        paddingLeft:8,
    }
})
export default HomeScreen;

