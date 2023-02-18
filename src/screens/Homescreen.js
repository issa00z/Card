import react, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from "react-native";
import { Image } from 'react-native';

export default function Homescreen() {


    const [name, setname] = useState('anything');

    const clickhandler = () => {
        setname('issa');
    }

    return (

        < View style={styles.container} >
            <View style={styles.buttoncontainer}>
                <Button title='Hotels' onPress={clickhandler}></Button>
            </View>


            <View style={styles.buttoncontainer2}>
                <Button title='Meals' onPress={clickhandler}></Button>

            </View>

            <View style={styles.buttoncontainer3}>
                <Button title='Sites' onPress={clickhandler}></Button>

            </View>
            <View style={styles.buttoncontainer4}>
                <Button title='Settings' onPress={clickhandler}></Button>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({

    buttoncontainer: {
        marginRight: 270,
        marginTop: 790,
    },
    buttoncontainer2: {
        marginRight: 95,
        marginTop: -38,
    },

    buttoncontainer3: {

        marginRight: -70,
        marginTop: -38,
    },

    buttoncontainer4: {
        marginRight: -210,
        marginTop: -38,

    },
});