import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../screens/History';
import Listproducts from '../screens/Listproducts';
import Dashboard from '../screens/Dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
// FontAwesome
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
           tabBarIcon: ({ color, size }) => (
            <Icon1 name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Products" component={Listproducts} />
      <Tab.Screen name="History" component={History} options={{
           tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default MyTabs