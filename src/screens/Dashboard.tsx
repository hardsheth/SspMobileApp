import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import UserImage from '../components/UserImage';
// import Drawer from '../components/Drawer';
import CustomHeader from '../components/CustomHeader';

function Dashboard() {
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      {/* <Drawer />
       */}
      <CustomHeader />
      <UserImage />
      <Text style={styles.profileName}>Hard Sheth</Text>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text style={styles.highlighttext}>DOB:</Text>
            <Text style={styles.righttext} >2024-02-02</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.highlighttext}>Age:</Text>
            <Text style={styles.righttext} >24</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text style={styles.highlighttext}>Contact No:</Text>
            <Text style={styles.righttext} >9428663751</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text style={styles.highlighttext}>Adddress: </Text>
            <Text style={styles.righttext}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eveniet necessitatibus cum quas ipsa nobis, placeat nisi non facilis animi?</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text style={styles.highlighttext}>Email :</Text>
            <Text style={styles.righttext} >Hardsheth17@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 9,
  },
  highlighttext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  righttext: {
    fontSize: 16,
    paddingLeft: 10,
    color: 'green',
    flexWrap:'wrap',
    // marginRight:20,
    paddingRight:10
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profileName: {
    fontSize: 28,
    marginTop: 10,
    textAlign: 'center'
  },

  column: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    paddingRight:19
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  }
});

export default Dashboard