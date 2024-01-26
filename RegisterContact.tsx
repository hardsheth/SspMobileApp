import { StyleSheet, Text, TextInput, View } from "react-native";
function RegisterContact({navigation}:any): React.JSX.Element {
    return (
      <View style={styles.loginContainer} >
      <Text style={styles.sectionTitle} >Contact Number</Text>
      <TextInput style={styles.inputno} placeholder='+91 xxxxx xxxxx' maxLength={10} keyboardType="numeric"   />
    </View>
    );
  }
  const styles = StyleSheet.create({

    loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: '600',
    },
    inputno: {
      width:300,
      backgroundColor:'green',
      borderRadius:30,
      borderWidth:3
    }
  
  });

export default RegisterContact;