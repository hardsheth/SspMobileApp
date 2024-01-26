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
import InputBoxOtp from './InputBoxOtp';
import { Controller, useForm } from 'react-hook-form';




function App({navigation, route}:any) {
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
        console.log(`LOok`);
        
        onSubmit()
      }
    }
    else{
      setOtpnoinput([])
    }
  }, [otpno]);
  const onSubmit=()=>{
    console.log( 'data');
  }
  const updateOtp=()=>{
    otpInputRef.current?.focus();
  }
  return (
    <View style={styles.loginContainer} >
      <Text style={styles.sectionTitle} >Enter Otp</Text>
      <Text>This is {route.params.name}'s profile</Text>;
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
  sectionInput: {
    height:1
  },
  otpDisplay: {
    flexDirection: 'row',
  },

});

export default App;
