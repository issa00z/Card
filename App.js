/**
 //* Sample React Native App
 //* https://github.com/facebook/react-native
 //*
 //* @format
 //* @flow strict-local
*/

/* $FlowFixMe [missing-local-annot] The type annotation(s) required by Flow's
* LTI update could not be added via codemod */

//export default App;

/* $FlowFixMe [missing-local-annot] The type annotation(s) required by Flow's
* LTI update could not be added via codemod */

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


import { DrawerActions } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from "react-native";
import LoginScreen from './loginscreen';
import Maincontainer from './src/componants/navigation/Maincontiner';
import Login from './src/screens/login';
import Navigation1 from './src1/Navigation1';
import Maincontainer1 from './src1/Navigation1';
export default function App(){

const [name, setname]= useState('anything');

const clickhandler=() => {
  setname('issa');
}
return(<LoginScreen/>)
 };
