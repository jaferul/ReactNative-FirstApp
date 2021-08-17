import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }){

    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <View style = {styles.item}>
                <MaterialIcons name = 'delete' size = {18} />
                <Text style = {styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },

    itemText: {
        marginLeft: 10,
    }
})