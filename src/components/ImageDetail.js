import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = props => {
    return ( 
    <View>
        <Image source={props.src}/>
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;