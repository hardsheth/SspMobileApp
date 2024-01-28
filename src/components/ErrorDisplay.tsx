import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ErrorComp{
    message:string|any
}

function ErrorDisplay({message}:ErrorComp) {
    return (
            <Text style={styles.loginContainer}> 
                {message}
            </Text>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        color:'red'
    },
  });

export default ErrorDisplay