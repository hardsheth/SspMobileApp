import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
interface ProductDetails {
  navigation?: void,
  productImg: string,
  title: string,
  description: string
}
export default function ProductListCard({ navigation, productImg, title, description }: ProductDetails) {
  return (
    <View style={styles.card}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{ uri: productImg }} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 4,
    maxWidth: 219,
  },
  imagecontainer: {
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color:'green'
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color:'green' 
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
})