import { FlatList, RefreshControl, Text, View } from "react-native"
import ProductListCard from "../components/ProductListCard"
import { productList } from "../utils/dummydatahistory"
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
    <View style={{ flex: 1 }}>
      <FlatList
      data={productList}
      renderItem={({item})=> <ProductListCard description={item.description} title={item.title} productImg={item.productImg} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      numColumns={2}
      // keyExtractor={(item) => item.}
    />
      {/* {
        productList.map((item) => {
          return (
            <View>
              <ProductListCard description={item.description} title={item.title} productImg={item.productImg} />
            </View>
          )
        })
      } */}
      <Text>Listproducts</Text>
    </View>
  )
}

export default Listproducts