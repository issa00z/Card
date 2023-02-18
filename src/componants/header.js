import react from 'react';
import { StyleSheet, Text,View,Button, TextInput, ImageBackground } from "react-native";

 export default function Header(){
    return(
         <ImageBackground source={require('../componants/assets/images/i.jpg')}style= {styles.header}>
            <Text style = {styles.title}>Welcome</Text>
        </ImageBackground>
    )
 }
 const styles=StyleSheet.create({

 header:{
     height:90,
    paddingTop:50,
    backgroundColor:'white'
    
    // height:'30%',
    // flexDirection:'row',
    // alignItems:'center',
    // alignContent:'center',
 },
 title:{
    backgroundColor:'blue',
textAlign:'center',
fontSize:20,
fontWeight:'bold',
 }
});