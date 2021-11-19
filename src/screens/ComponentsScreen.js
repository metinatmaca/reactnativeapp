import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourname = 'Metin';
    return ( 
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.text1Style}>My name is {yourname}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    text1Style: {
        fontSize: 20
    }

});

export default ComponentsScreen;