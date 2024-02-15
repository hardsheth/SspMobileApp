import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface ErrorComp {
    imagesource?: string | any
}

function UserImage({ imagesource }: ErrorComp) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagecontainer}
                // src='https://picsum.photos/200/300'
                source={{ uri: 'https://picsum.photos/200/300' }}
            // alt='Some Random Image'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        borderRadius: 70,
        width: 110,
        height: 110,
    },
    container: {
        marginTop: 5,
        alignItems:'center',
    }
});

export default UserImage