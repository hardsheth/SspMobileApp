import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HistoryDetails from "../components/HistoryDetails"
import Dummydata from "../utils/dummydatahistory"
import { useState } from "react";

function Listproducts() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    // Your refresh logic here
    setRefreshing(true);
    // Perform the data fetching or any other asynchronous task
    // Once the task is complete, set refreshing to false
    // For example: 
    setTimeout(() => setRefreshing(false), 2000);
  };
  return (
    <SafeAreaView style={style.container}>
      <FlatList
      data={Dummydata}
      renderItem={({item})=> <HistoryDetails description={item.description} paidAmonut={item.paidAmonut} paidDate={item.paidDate} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  container:{
    marginVertical:5
  }
})

export default Listproducts