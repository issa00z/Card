import react, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from "react-native";
import { Image } from 'react-native';
import Header from '../componants/header';

export default function Login() {

    const [name, setname] = useState('anything');

    const clickhandler = () => {
        setname('issa');
    }

    return (
        <View style={styles.container3}>
            <Header />
            <View style={styles.container}>

                <Text>Enter Username:</Text>
                <TextInput style={styles.input}
                    placeholder='username'
                    onChangeText={(val) => setname(val)} />
                <Text>Enter Password</Text>
                <TextInput style={styles.input2}
                secureTextEntry={true}

                    placeholder='Password' />
                    

                <Text>my name is {name}</Text>

                <Text></Text>
                <Text style={{ fontSize: 15, marginLeft: 150, marginTop: 50, }}>Don't have an account?

                    <View style={styles.buttoncontainer5}>
                        <Button title='create account' onPress={clickhandler}></Button>

                    </View>

                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 120,
        alignContent: 'center',
        //flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent:'center'

        container2: {

            marginRight: 500,
            marginTop: -100,

        },
    },

    buttoncontainer5: {
    marginRight: 10,
},
    input: {

    borderWidth: 1,
    borderEndColor: 'grey',
    padding: 7,
    margin: 8,
    width: 150,

},

    input2: {
    borderWidth: 1,
    borderEndColor: 'grey',
    padding: 7,
    margin: 8,
    width: 150,
    },
});
