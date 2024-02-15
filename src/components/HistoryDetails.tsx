import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export interface paidHistory {
    paidDate: string, paidAmonut: number, description: string
}

export default function HistoryDetails({ paidDate, paidAmonut, description }: paidHistory) {
    return (
        <View style={styles.cotainer}>
            <View >
                <Text style={styles.textright}>{description}</Text>
                <Text style={styles.datetext}>Paid Date : {paidDate}</Text>
            </View>
            <View>
                <Text style={styles.paidAmount}>{paidAmonut}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textleft: {
        color: 'green'
    },
    textright: {
        color: 'green',
        fontSize: 20
    },
    paidAmount: {
        color: 'green',
        fontSize: 30
    },
    datetext: {
        color: 'green',
        fontSize: 10
    },
    cotainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderColor: 'green',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 5
    },

})