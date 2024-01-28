import { StyleSheet, Text, View } from "react-native";
interface OTPDisplay{
  value:number|string,
  sendNo:()=>void
}
function App({value,sendNo}:OTPDisplay): React.JSX.Element {
    return (
      <Text style={styles.otpDisplay} onPress={sendNo} >
        {value}
      </Text>
    );
  }

  const styles = StyleSheet.create({
    otpDisplay: {
      borderCurve: "circular",
      padding:15,
      margin:8,
      width:40,
      borderWidth: 2, // Set the border width
      borderColor: 'black', // Set the border color
      borderRadius: 10, // Set the border radius
    },
  
  });

export default App;