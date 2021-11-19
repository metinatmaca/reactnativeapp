import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return ( 
    <View>
        <ImageDetail title="Forest" src={require("../../assets/forest.jpg")} score="9"/>
        <ImageDetail title="Beach" src={require("../../assets/beach.jpg")} score="7"/>
        <ImageDetail title="Mountain" src={require("../../assets/mountain.jpg")} score="4"/>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;