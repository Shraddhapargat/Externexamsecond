import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ForgotPassword from './ForgotPassword';
//import Verification from './Verification';
import Secondexam from './Secondexam';
import Secondpage from './Secondpage';
//const Stack = createNativeStackNavigator();
const App = () => {
    const Stack = createNativeStackNavigator();
return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='exam'>
            <Stack.Screen name='First' component={Secondexam}/>
            <Stack.Screen name='Second' component={Secondpage}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}   

export default App
