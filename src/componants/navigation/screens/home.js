import * as React from 'react';
import {View,Text, Alert} from 'react-native';

export default function Home({navigation}){
   
   return(
<View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text
        onPress={()=> Alert.alert('this is the "Hotels" screen.')}
        style={{fontsize:26, fontWeight:'bold'}}>home screen
    </Text>

</View> 
    );
}



