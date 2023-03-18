import React from 'react';
import{View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator }from '@react-navigation/bottom-tabs';
import icon from 'react-native-vector-icons/Ionicons'

//screens
import Home from './screens/home'
import Hotels from './screens/Hotels'
import Meals from './screens/Meals'
import Sites from './screens/Sites'
import Homescreen from '../../screens/Homescreen';
import Icon from 'react-native-vector-icons/Ionicons';

//screen names

const homeName ='home'
const HotelsName ='Hotels'
const MealsName ='Meals'
const SitesName ='Sites'

const tab = createBottomTabNavigator();

export default function Maincontainer(){
    return(
       <NavigationContainer>
        <tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon:({focused, color, size})=>{
                let iconname;
                let rn= route.name;

                if(rn === homeName){
                    iconname =focused ? 'home' : "ios-home"
                }else if (rn=== HotelsName){
                    iconname =focused ? 'Hotel' : "md-bed"
                }else if (rn=== MealsName){
                    iconname =focused ? 'Meals' : "ios-fast-food"
                }else if (rn=== SitesName){
                    iconname =focused ? 'Sites' : "ios-bicycle"

    
            }

            return<Icon name = {iconname} size =  {size}  color = {color}/>
            return <View></View>
        },
        })}>
          

          <tab.Screen name ={homeName} component = {Home}/>
          <tab.Screen name ={HotelsName} component = {Hotels}/>
          <tab.Screen name ={MealsName} component = {Meals}/>
          <tab.Screen name ={SitesName} component = {Sites}/>


        </tab.Navigator>
       </NavigationContainer>
    );
}