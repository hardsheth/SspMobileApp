import React, { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import InputBoxOtp from '../components/InputBoxOtp';
import { CommonActions, StackActions } from '@react-navigation/native';


function App({ navigation }: any) {
  const { control, handleSubmit, setValue, formState: { errors }, watch } = useForm();
  const [otpnoinput, setOtpnoinput] = useState(['0', '0', '0', '0', '0', '0'])
  const otpno = watch('otp')
  const otpInputRef: any = useRef(null);
  useEffect(() => {
    if (otpno) {
      const numberString = otpno.toString();
      const OTPNO = numberString.split('');
      setOtpnoinput(OTPNO)
      console.log(OTPNO, 'otpno');
    }
    else {
      setOtpnoinput([])
    }
  }, [otpno]);
  const onSubmit = () => {
    console.log('data');
    console.log('Clear1');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Profile' } // Replace 'Otp' with the name of the screen you want to navigate to
        ],
      }));
    // navigation.navigate('Profile')
    console.log('Clear');
  }
  const updateOtp = () => {
    otpInputRef.current?.focus();
  }
  return (
    <SafeAreaView style={styles.loginContainer} >
      <Text style={styles.sectionTitle} >Enter Otp</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            ref={otpInputRef}
            style={styles.sectionInput}
            onChangeText={(value) => field.onChange(value)}
            maxLength={6}
            value={field.value}
            keyboardType='numeric'
          />
        )}
        name="otp"
        rules={{
          required: {
            value: true,
            message: `Please Enter OTP`
          },
          min: {
            value: 0,
            message: `Please Enter the Valid OTP`
          }
        }}
      />
      <View style={styles.otpDisplay}>
        <InputBoxOtp value={otpnoinput[0]} sendNo={updateOtp} />
        <InputBoxOtp value={otpnoinput[1]} sendNo={updateOtp} />
        <InputBoxOtp value={otpnoinput[2]} sendNo={updateOtp} />
        <InputBoxOtp value={otpnoinput[3]} sendNo={updateOtp} />
        <InputBoxOtp value={otpnoinput[4]} sendNo={updateOtp} />
        <InputBoxOtp value={otpnoinput[5]} sendNo={updateOtp} />
      </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  sectionInput: {
    height: 1,
  },
  otpDisplay: {
    flexDirection: 'row',
  },
  submitbtn: {

  }
});

export default App;
