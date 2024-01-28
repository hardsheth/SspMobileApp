import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Text, View } from 'react-native'
import Bottom from '../components/Bottom';

function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Bottom />
    </View>
  )
}

export default Profile