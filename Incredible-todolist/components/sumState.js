import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const SumState = () => {
    const [inputText1, setInputText1] = useState(0);
    const [inputText2, setInputText2] = useState(0);

    const OnClick1 = () => {
        setInputText1(inputText1);
    }

    const OnClick2 = () => {
        setInputText1(inputText2);
    }

    const Sum = () => {
        inputText1 + inputText2;
    }

  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Props Practice</Text>
        
        <Text style={styles.textStyle}>Enter the first value</Text>
        <TextInput placeholder="45" value={inputText1}></TextInput>

        <Text style={styles.textStyle}>Enter the second value</Text>
        <TextInput placeholder="60" value={inputText1}></TextInput>

        <Text style={styles.textStyle}>Counter: {}</Text>
        <Button>Add</Button>

        <Text>Sum: {Sum}</Text>
    </View>
  )
}

export default SumState

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        textAlign: "center",
    },

    textStyle:{
        color: "white",
        textAlign: "center",
    }
})