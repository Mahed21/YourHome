import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#C1E1C1',
                    image: <Image source={{ uri: 'https://i.ibb.co/NTkjkyC/landing3.png', }} />,
                    title: 'YourHome',
                    subtitle: 'An all-in-one app for Bachelors',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={{ uri: 'https://i.ibb.co/NTkjkyC/landing3.png', }} />,
                    title: 'Rent a Home',
                    subtitle: 'Get a roof without hassle for Bachelors',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={{ uri: 'https://i.ibb.co/NTkjkyC/landing3.png', }} />,
                    title: 'Meal Count',
                    subtitle: 'Count your Monthly Meal Count',
                },
            ]}
        />
    );
};


export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});