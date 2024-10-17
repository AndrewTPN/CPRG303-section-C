import { StyleSheet, Text as Label, View as Container, Image as Picture } from 'react-native'
import React from 'react'

// Component function to create custom input element
const CustomInputElement = () => {
  return (
    // Container for creating layers.
    <Container style={styles.wrapper}>
        <Picture source={require('./gr.png')} style={styles.image}></Picture>
        <Label style={styles.title}>Greece</Label>

        <Container style={styles.innerWrapper}>
            <Container style={styles.bubble}>
                <Label style={styles.text}>Patras</Label>
            </Container>
        </Container>

        <Container style={styles.innerWrapper}>
            <Container style={styles.bubble}>
                <Label style={styles.text}>Athene</Label>
            </Container>
        </Container>

        <Container style={styles.innerWrapper}>
            <Container style={styles.bubble}>
                <Label style={styles.text}>Crete</Label>
            </Container>
        </Container>
    </Container>
  )
}

export default CustomInputElement

// Styling.
const styles = StyleSheet.create({
    wrapper:{
        width: 300,
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },

    image:{
        height: 100,
        width: 100,
        marginBottom: 10, 
    },

    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        
    },

    innerWrapper:{
        marginTop: 20,
        marginBottom: 30,
        alignItems: "center"
    },
    
    field:{
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor: "white",
        margin: 20,
        height: 40, 
    },

    form:{
        color: "white",
        margin: 20,
    },
    bubble:{
        backgroundColor:"white",
        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 5,
        marginBottom: 5,
        padding: 10,
    },
});
