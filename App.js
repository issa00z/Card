/**
 //* Sample React Native App
 //* https://github.com/facebook/react-native
 //*
 //* @format
 //* @flow strict-local
*/


//import React, { useState } from 'react';
//import {FlatList, StyleSheet, Text, View} from 'react-native';
//import Card from './src/componants/card';



/* $FlowFixMe [missing-local-annot] The type annotation(s) required by Flow's
* LTI update could not be added via codemod */


//const App =() =>{

//return (
//<View style={{ flex:1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>

//<View style={StyleSheet.container}>


//<Text style={{ color: 'black' }}> Woooow</Text>

//<Text style={{color:'red'}}>Yesss</Text>


//</View>
//</View>






//export default App;

/* $FlowFixMe [missing-local-annot] The type annotation(s) required by Flow's
* LTI update could not be added via codemod */

//const App = () => {
  //return (
    //<View style={styles.container}>


      //<View style={styles.container2}>
        //<View style={{
          //borderWidth: 1,
          //width: 200,
          //helght: 73,
          //marginLeft: 100,
          //marginTop: 20,
          //borderStyle: 'dashed'
        //}}>

          //<Text style={{ fontSize: 15, color: 'white' }}> name: Issa Bazazo
          //</Text>
          //<Text style={{ fontSize: 15, color: 'white' }}> B.D: 09-06-1996
          //</Text>
        //</View>
        //<View style={styles.container3}>
          //<Text>programmer</Text>
          //<Text>Jerusalem</Text>
        //</View>

        //<Text style={styles.Text2}> My first Ui
        //</Text>
      //</View>
    //</View>
 // )
//};


//const styles = StyleSheet.create({
  //container: {
    //marginTop: 100,
    //flex: 1,
    //alignItems: 'center',
    //backgroundcolor: 'blue',
    //alignContent: 'center',
    //justarycontent: 'center'
  //},
  //container2: {
    //marginTop: 100,
    //backgroundColor: 'brown',
    //borderwidth: 1,
    //alignItems: 'center',
    //justifycontent: 'center',
    //marginHorizontal: 50,
    //marginTops: -700,
    //width: 330,
    //marginTops: 100,

  //},

  //container3: {
    //marginTop: 100,
    //height: 70,
    //backgroundColor: 'white',
    //borderWidth: 1,
    //marginRight: 300,
    //marginTop: -50,
    //shadowColor: '#000',
    //width: 90,
    //justifyContent: 'center',
    //alignItems: 'center',
    //marginLeft: 100
  //},

  //Text: {
    //fontSize: 10, color: 'white', justifycontent: 'center', alignItems: 'center'
  //},
  //Text2: {
    //fontsize: 40, color: 'white', textAlign: 'center', fontWeight: 'bold'
  //}
//})
//export default App;




/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

//const App = () => {

  //const [lastUser , setLastUser] = useState('')

  //const data = [
    //'DELL',
    //'LG',
    //'HEINZ',
    //'SAMSUNG',
    //'APPLE',
    //'NOTHING',
    //'BEATS',
    //'SONY',
    //'GAZ',
  //];

  //const renderNames = () => {
    //const cardsArray = data.map((name, index) => {
      //return <Card text={name} id={index * 10} />;
    //});

    //return cardsArray;
  //};

  //const renderItem = ({item, index}) => {
    //return <Card
     //text={item}
      //id={index * 10}
    //  onCardChange={(name) => setLastUser(name) } />;
  //};

  //return (
    //<View style={styles.container}>
      //<Text>{'Brands'}</Text>
      //<Text>{lastUser}</Text>
      //<FlatList data={data} renderItem={renderItem} />
    //</View>
  //);
//};

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor:'brown',
    //borderWidth: 1,
    //paddingTop: 50,
  //},
//});


import { useState } from 'react';
import { StyleSheet } from "react-native";
import Maincontainer from './src/componants/navigation/Maincontiner';
export default function App(){

const [name, setname]= useState('anything');

const clickhandler=() => {
  setname('issa');
}

return(<Maincontainer/>)

// return(
// <View style={styles.container3}>
//   <Header/>
//   <View style={styles.container}>

//   <Text>Enter Username:</Text>
//   <TextInput style = {styles.input}
//   placeholder ='username' 
//   onChangeText={ (val)=> setname(val) }/>
//   <Text>Enter Password</Text>
//   <TextInput style = {styles.input2}
  
//   placeholder='Password' />

//   <Text>my name is {name}</Text>

//   <Text></Text>
//   <Text style ={{fontSize:15,marginLeft:150,marginTop:50,}}>Don't have an account?

//   <View style={styles.buttoncontainer5}>
//   <Button title='create account'onPress={clickhandler}></Button>
  
//   </View>

//   </Text>
//   <View style = {styles.container4}>
  
//   <View style={styles.buttoncontainer}>
//   <Button title='Hotels'onPress={clickhandler}></Button>
//   </View>
  
  
//   <View style={styles.buttoncontainer2}>
//   <Button title='Meals'onPress={clickhandler}></Button>
  
//   </View>

//   <View style={styles.buttoncontainer3}>
//   <Button title='Sites'onPress={clickhandler}></Button>
  
//   </View>
//   <View style={styles.buttoncontainer4}>
//   <Button title='Settings'onPress={clickhandler}></Button>
  
//   </View>
//   </View>

// {/* <View style ={styles.container2}> */}
// {/* <Text style ={{fontSize:15,marginLeft:100,justifyContent:'center',}}>Don't have an account?

// </Text> */}
// {/* </View> */}

// </View>
// </View>
// );
}

const styles=StyleSheet.create({
  container:{
    marginTop:120,
    alignContent: 'center',
    //flex:1,
    backgroundColor:'white',
    alignItems:'center',
    //justifyContent:'center'

    container2:{
      
      marginRight:500,
      marginTop:-100,

    },
 },
 buttoncontainer:{
  marginRight:270,
  marginTop:320,
 },
 buttoncontainer2:{
  marginRight:95,
  marginTop:-38,
 },

 buttoncontainer3:{

  marginRight:-70,
  marginTop: -38,
 },

 buttoncontainer4:{
  marginRight:-210,
  marginTop: -38,

  
 },
 buttoncontainer5:{
  marginRight:10,
},
 input:{

  borderWidth:1,
  borderEndColor:'grey',
  padding:7,
  margin:8,
  width:150,
  
 },

 input2:{
  borderWidth:1,
  borderEndColor:'grey',
  padding:7,
  margin:8,
  width:150,
 },
});
