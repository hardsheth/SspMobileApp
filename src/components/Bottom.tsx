import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Text } from 'react-native'
import Profile from '../screens/Profile';
import Listproducts from '../screens/Listproducts';
import HistoryProduct from '../screens/History'
const Tab = createBottomTabNavigator();
function Bottom() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Profile} />
            <Tab.Screen name="List" component={Listproducts} />
            <Tab.Screen name="Orders" component={HistoryProduct} />
        </Tab.Navigator>
    )
}

export default Bottom