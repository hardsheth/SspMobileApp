import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomHeader() {
    return (
        <View style={styles.header}>
            <Text>CustomHeader</Text>
            <Text style={styles.editimgicon}><Icon name="edit" size={26} /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editimgicon: {
        // justifyContent:'flex-end'
        textAlign: 'right',
        marginRight: 13,
        borderRadius: 30,
        color: 'green',
        borderColor: 'green',
        borderWidth: 1,
        padding: 5
    }
})