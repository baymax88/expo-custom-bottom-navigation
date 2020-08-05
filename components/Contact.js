import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text>Contact Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Contact;