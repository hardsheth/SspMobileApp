/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Controller, useForm } from 'react-hook-form';
import InputBoxOtp from '../components/InputBoxOtp';
import { CommonActions } from '@react-navigation/native';




function App({navigation}:any) {
  const isDarkMode = useColorScheme() === 'dark';
  const { control, handleSubmit,setValue, formState, watch } = useForm();
  const [otpnoinput,setOtpnoinput]=useState(['0','0','0','0','0','0' ])
  const otpno = watch('otp')
  const otpInputRef:any = useRef(null);
  useEffect(() => {
    if(otpno){
      const numberString = otpno.toString();
      const OTPNO=numberString.split('');
      setOtpnoinput(OTPNO)
      if(OTPNO.length>5){
        onSubmit()
      }
    }
    else{
      setOtpnoinput([])
    }
  }, [otpno]);
  const onSubmit=()=>{
    console.log( 'data');
    // navigation.replace('Profile');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Profile' } // Replace 'Otp' with the name of the screen you want to navigate to
        ],
      })
    );
  }
  const updateOtp=()=>{
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
        <InputBoxOtp value={otpnoinput[0]} sendNo={updateOtp}/>
        <InputBoxOtp value={otpnoinput[1]} sendNo={updateOtp}/>
        <InputBoxOtp value={otpnoinput[2]} sendNo={updateOtp}/>
        <InputBoxOtp value={otpnoinput[3]} sendNo={updateOtp}/>
        <InputBoxOtp value={otpnoinput[4]} sendNo={updateOtp}/>
        <InputBoxOtp value={otpnoinput[5]} sendNo={updateOtp}/>
      </View>
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
    height:1,
  },
  otpDisplay: {
    flexDirection: 'row',
  },

});

export default App;
