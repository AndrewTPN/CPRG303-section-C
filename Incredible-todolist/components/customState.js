//counter = 0
//button click -> increment by 1 -> counter + 1;

import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'


const CustomState = () => {
    //set counter useState. counter is zero and it reads, and setCounter keep the updated values.
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("John");
    const [person, setPerson] = useState({
        name: "abc",
        age: 40,
        status: "Developer",
    });

    //function to increment counter by 1.
    const handlePress = () => {
        setPerson({name: "Vinit", age:41, status: "Engineer"});
        //setCounter(counter + 1);
    }

    const handlePressDec = () => {
        setName("Shaun");
        //setCounter(counter - 1);
    }


  return (
    <View style={styles.container}>
        {/**Counter is initialized to zero */}
        <Text style = {styles.text1}>My name is {person.name} and my age is {person.age} and status is {" "} {person.status}</Text>
        <Text style = {styles.text1}>Counter: {counter}</Text>
        <Text style = {styles.text1}>Name is: {name}</Text>
        <View style = {{margin: 20}}>
            <Button title="Increase" onPress={handlePress} style={styles.buttonStyles}> </Button>
            <Button title="Decrease" onPress={handlePressDec}> </Button>
        </View>
        <Text style={styles.textStyle}>You've clicked {counter} times.</Text>
    </View>
  )
}

export default CustomState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },

    textStyle:{
        fontSize: 20,
        color: "white",
    },

    buttonStyles: {
        paddingBottom: 10,
    },
    
    
})