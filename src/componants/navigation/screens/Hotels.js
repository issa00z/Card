import * as React from 'react';
import {View,Text} from 'react-native';

export default function Hotels({navigation}){
   
   return(
<View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text
        onPress={()=> navigation.navigate('home')}
        style={{fontsize:26, fontWeight:'bold'}}>Hotels screen
    </Text>

</View> 
    );
}
 
