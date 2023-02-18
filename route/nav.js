
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Homescreen from "../src/screens/Homescreen";
import Secondscreen from "../src/screens/Secondscreen";
//import ScreensName from "./ScreensName";

const MainNavigation = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreensName.Homescreen} component={Homescreen} />
                <Stack.Screen name={ScreensName.Secondscreen} component={Secondscreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation ; 