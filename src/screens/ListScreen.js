import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age:'Age 20'},
        { name: 'Friend #2', age:'Age 45'},
        { name: 'Friend #3', age:'Age 32'},
        { name: 'Friend #4', age:'Age 27'},
        { name: 'Friend #5', age:'Age 31'},
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data = {friends}
            renderItem={({ item }) => {
                return <Text style={styles.listStyle}>{item.name} - {item.age}</Text>;
            }} 
        />
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 10
    }
});

export default ListScreen;