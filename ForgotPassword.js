//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';

 const ForgotPassword = () =>{
     return(
    <View style= {styles.mainContainer}>
    <Text style ={styles.mainHeader}>Forgot Password</Text>
      <Image source={{uri:"https://media.istockphoto.com/photos/data-protection-concepts-in-cybersecurity-and-privacy-technologies-picture-id1359269157?s=612x612"}}
      style={{height:200,width:200}}/>
    <Text style={styles.discription}>No worries enter valid email Address we will send you reset</Text>

<View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Email</Text>

        <TextInput style = {styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='eg. name@externlabs.com'
        />
        <View>
            <Button title='SEND REQUEST'
            backgrounColor="darkorange"
            onPress={()=>{alert(`Please check you email $("email")`);
            }}/>           
        </View>
</View>
</View>
     )};
const styles = StyleSheet.create(
{
/*container: 
{
    flex :1,
    //padding:34,
    //backgroundColor:"#ffdab9",
    alignItems:'center',
    justifyContent:'cernter',
},
TouchableOpacity:
{
      flex:1,
      padding:30,
},
Text:
{
    fontSize:30,
    color:'#f0f',
},*/
mainContainer:
{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
      //backgroundColor:'lightblue',
  
},    
mainHeader:
{
      alignItems:"center",
      justifyContent:'center',
      fontSize:40,
      color:"blue",
      //fontWeight:"500",
      padding:30,
      //textTransform:"capitalize",
},
discription:
{
      fontSize:25,  
      color:"#7d7d7d",
      paddingBottom:20,
      margin:10,
},
inputContainer:
{
      marginTop:20,
},
labels:
{
      fontSize:20,
      alignItems:'center',
      justifyContent:'center',
      color:"black",
      marginTop:10,
      //marginBottom:5,
},
inputStyle:
{
      borderWidth:1,
      padding:40,
      //borderColor: "rgba(0,0,0,0.3)",
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:1,
      fontSize:10,
      margin:10,
},
button:
{
    //backgroundColor:"blue",
    alignItems:'center',
    padding:10,
    paddingVertical:1,
}
});
 export default ForgotPassword
