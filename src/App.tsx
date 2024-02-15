import React from 'react';
import {
  Text, View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpScreen from './screens/OtpScreen';
import RegisterContact from './screens/RegisterContact';
import Profile from './screens/Profile';
import {BASE_URL} from "@env"
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

function App(): React.JSX.Element {
  console.log(BASE_URL,'basurl')
  return (
    <NavigationContainer >
     <Stack.Navigator initialRouteName='Profile' >
        <Stack.Screen name="Home" component={RegisterContact} />
        <Stack.Screen name="Otp" component={OtpScreen}  options={{}} />
        <Stack.Screen name="Profile" component={Profile} options={{  headerShown: false ,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
