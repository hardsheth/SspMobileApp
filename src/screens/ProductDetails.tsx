import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HistoryDetails from "../components/HistoryDetails"
import Dummydata from "../utils/dummydatahistory"

function Listproducts() {
 
  return (
    <SafeAreaView style={style.container}>
      <View>
     <Text style={style.productTitle}>Krishna</Text>
     <Text style={style.productDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil iure voluptatem vero rem dolorem porro, odit, repudiandae quod magnam excepturi provident dolorum at? Tenetur eos architecto suscipit labore ad dolorem!</Text>
      </View>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  container:{
    marginVertical:5,
    marginHorizontal:5
  },
  productTitle:{
    color:'green',
    fontSize:30
  },
  productDescription:{
    color:'green',
    fontSize:20
  }
})

export default Listproducts