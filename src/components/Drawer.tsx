import History from '../screens/History';
import Listproducts from '../screens/Listproducts';
import Dashboard from '../screens/Dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer  = createDrawerNavigator();

function MyTabs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Products" component={Listproducts}  />
      <Drawer.Screen name="History" component={History}  />
    </Drawer.Navigator >
  );
}
export default MyTabs