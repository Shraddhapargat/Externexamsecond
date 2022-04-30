import React from "react";
import {View, Text, StyleSheet, Image} from  'react-native';
const Secondexam = ()=>{
    return(
        <View style={styles.mainContainer}>
            <Text>Hello Welcome to</Text>
            <Image source={{uri:"https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"}}
      style={{height:500,width:500}}/>
        <Text style ={styles.mainHeader}>Travle Go!</Text>
        <View>
        <Image source={{uri:"https://cdn5.vectorstock.com/i/1000x1000/44/74/right-arrow-button-icon-vector-21894474.jpg"}}
        style={{height:100,width:100}}
        onPress ={()=>navigation.navigate('Secondpage')}
        />
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
        }
    }
);
export default Secondexam()