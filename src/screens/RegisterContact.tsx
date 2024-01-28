import { Controller, useForm } from "react-hook-form";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ErrorDisplay from "../components/ErrorDisplay";
function RegisterContact({ navigation }: any): React.JSX.Element {
  const { control, handleSubmit, setValue, formState: { errors }, watch } = useForm();
  const onSubmit = (data: any) => {
    navigation.navigate('Otp')
  }
  return (
    <View style={styles.loginContainer} >
      <Text style={styles.sectionTitle} >Contact Number <Text></Text></Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            onChangeText={(value) => field.onChange(value)}
            placeholder='+91 xxxxx xxxxx'
            maxLength={10}
            style={styles.inputno}
            value={field.value}
            keyboardType='numeric'
          />
        )}
        name="contact"
        rules={{
          required: {
            value: true,
            message: `Please Enter Contact No`
          },
          minLength: {
            value: 10,
            message: `Please Enter Valid Contact No`
          }

        }}
      />
      {errors.contact ? <ErrorDisplay message={errors.contact.message} /> : ''}
      {/* <Button title="Submit"  onPress={()=>navigation.navigate('Otp')} /> */}
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.submitbtn,
        ]}
        onPress={handleSubmit(onSubmit)}
        disabled={errors.contact ? true : false}
      >
        <Text >Submit</Text>
      </Pressable>
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
  submitbtn: {
    width: 200,
    marginTop: 15,
    borderRadius: 30,
  },
  btnText: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  inputno: {
    width: 300,
    borderRadius: 30,
    borderWidth: 3,
    padding: 10
  }
});

export default RegisterContact;