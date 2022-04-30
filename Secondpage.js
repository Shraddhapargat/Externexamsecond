import React from "react";
import {View, Text, StyleSheet, Button, Image, TextInput} from  'react-native';
const Secondexam = ()=>{
    return(
        <View style={styles.mainContainer}>

            <Image source={{uri:"https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"}}
      style={{height:500,width:500}}/>
        <Text style ={styles.mainHeader}> Lets Go! </Text>
        <Text style={styles.discription}>Traveling around the world</Text>

        <View style ={styles.InputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Enter Username"
        />
        <TextInput 
       style={styles.input}
       placeholder="Enter password"
        />
        <Button title="log In"
        backgroundColor='white'
        borderColor='Darkblue'/>
        </View>

                <View>
                    <Button title="Create Account"
                    alignItems='flex-end'/>

                    <Button title="Forgot Password"
                    alignItems='flex-end'/>
                </View>
        </View>
    );
};
const styles=StyleSheet.create(
    {
        mainContainer: 
        {
            flex:1,
            alignItems:'center',
            fontSize:10,
            justifyContent:'center',
            marginTop:50,
        },
        mainHeader:
        {
            alignItems:"center",
            justifyContent:'center',
            fontSize:40,
            color:"blue",
      //fontWeight:"500",
            padding:30,
        },
        InputContainer:{
            marginTop:20,
        },
        input:{
            alignItems:"center",
            justifyContent:"center",
            padding:30,

        }
    }
);
export default Secondexam()