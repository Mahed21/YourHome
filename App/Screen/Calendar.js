
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { CalendarList } from 'react-native-calendars';

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <CalendarList
                onVisibleMonthsChange={(months) => { }}
                pastScrollRange={4}
                futureScrollRange={4}
                scrollEnabled={true}
                showScrollIndicator={true}
                calendarParams
                maxDate={new Date()}
            />
        </View>

    );
};

const styles = StyleSheet.create({

});

export default Home;