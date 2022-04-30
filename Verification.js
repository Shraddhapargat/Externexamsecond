import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import { CodeField,
    CodeInput, 
    Cursor, 
    useBlurOnFulfill, 
    useClearByFocusCell } from 'react-native-confirmation-code-field';
import { SafeAreaView } from 'react-native-safe-area-context';
const Verification = () => {
    return(
    <View style={styles.mainContainer }>
    
    <Text style={styles.mainHeader}>Verification Code</Text>
    <Image source={{uri:"https://5.imimg.com/data5/KB/ZB/NA/SELLER-81980457/instagram-verification-500x500.png"}}
    style={{height:100, width:200, alignItems:'center'}}/>
    <Text style={styles.description}>We have send you Verification Code on provided email</Text>

    <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle}/>
    <Text style={styles.lable}>Enter code</Text>
    
    <View>
        <Button 
        title ="Confirm Verification"
        color={"darkorange"}
        onPress ={()=>navigation.navigate('ForgotPassword')}
        />
    </View> 

    </View>
    </View>
    
    )};

    const CELL_COUNT= 4;
    const Underline =() =>{
        const  [value, setValue] = useState('');
        const ref = useBlurOnFulfill({value, cellCount : CELL_COUNT});
        const [props, getCellOnLayoutHandler ] = useClearByFocusCell({
            value,
            setValue,
        });
        return(
            <SafeAreaView style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText = {setValue}
                    cellCount = {CELL_COUNT}
                    rootStyles = {styles.CodeFieldRoot}
                    keyboardType = "number-pad"
                    textContentType = "oneTimeCode"
                    renderCell = {({index, symbol, isFocused}) => (
                        <Text>
                            key = {index}
                            style = {[styles.cell, isFocused && styles.focusCell]}
                            onLayout = {getCellOnLayoutHandler(index)}
                            {symbol ||(isFocused ? <Cursor/>: null)}</Text>)} />   
            </SafeAreaView>
        );

    };
    const styles= StyleSheet.create({
        root: {flex:1, padding:20},
        tittle:{textAlign:'center', fontSize:30},
        CodeFieldRoot:{marginTop:20},
    mainContainer:{
        flex:1,
        aglinItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
    mainHeader:
    {
        justifyContent:'center',
        alignItems:"center",
        flex:1,
        fontSize:40,
        color:"blue",
        padding:30,
    },
    inputContainer:
    {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderColor:'black',
    },
    inputStyle:
    {
        
        padding:20,
        paddingHorizontal:10,
        paddingVertical:15,
        margin:10,
    },
    cell:{
        width:40,
        height:40,
        lineHeight:38,
        fontSize:24,
        borderWidth:2,
        borderColor:'grey',
        textAlign:'center'
    },
    focusCell:{
        borderColor:'darkgery',

    },
    lable:
    {
        margin:10,
    },
    Button:
    {
        padding:20,
        paddingHorizontal:15,
        paddingVertical:15,
        margin:10,
        
    }
}); 
export default Verification
