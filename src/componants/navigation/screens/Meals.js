import * as React from 'react';
import {View,Text} from 'react-native';

export default function Meals({navigation}){
   
   return(
<View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text
        onPress={()=> navigation.navigate('home')}
        style={{fontsize:26, fontWeight:'bold'}}>Meals screen
    </Text>

</View> 
    );
}
 
