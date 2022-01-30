import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyle';
import ImagePath from '../../../../constants/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './style';
const Forgot = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Styles.root}>
        <View style={{position: 'relative', flex: 1}}>
          <Image
            source={ImagePath.forgothead}
            resizeMode="stretch"
            style={globalStyles.Image}
          />
          <TouchableOpacity
            style={Styles.backbutton}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <KeyboardAvoidingView behavior="position">
            {!password && (
              <>
                <View style={Styles.content_Container}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={ImagePath.forgotmiddle}
                      resizeMode="stretch"
                      style={Styles.forgotImage}
                    />
                  </View>
                  {!otp && (
                    <>
                      <Text
                        style={{fontSize: 20, marginBottom: 10, color: '#000'}}>
                        Forgot Password ?
                      </Text>
                      <View style={globalStyles.inputFieldContainer}>
                        <TextInput
                          style={globalStyles.inputField}
                          outlineColor="#fff"
                          theme={{roundness: 10}}
                          label="Enter Your User ID"
                          mode="outlined"
                        />
                      </View>
                    </>
                  )}

                  {otp && (
                    <>
                      <Text style={Styles.otptext}>
                        We have sent An otp on Your Registered Mobile Number
                      </Text>
                      <View style={globalStyles.inputFieldContainer}>
                        <TextInput
                          style={globalStyles.inputField}
                          outlineColor="#fff"
                          theme={{roundness: 10}}
                          label="Enter Your OTP"
                          mode="outlined"
                        />
                      </View>
                    </>
                  )}
                </View>
                <View
                  style={{
                    alignItems: !otp ? 'flex-end' : null,
                    paddingHorizontal: 20,
                    marginVertical: !otp ? 10 : 0,
                    zIndex: 2,
                  }}>
                  {!otp && (
                    <Button
                      mode="contained"
                      style={{width: 100, elevation: 10}}
                      theme={{roundness: 10}}
                      onPress={() => setOtp(true)}>
                      Next
                    </Button>
                  )}
                  {otp && (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        onPress={() => setOtp(false)}
                        style={{
                          color: 'blue',
                          borderBottomWidth: 1,
                          borderBottomColor: 'blue',
                        }}>
                        Try Another User Id
                      </Text>
                      <Button
                        mode="contained"
                        style={{width: 100, elevation: 10}}
                        theme={{roundness: 10}}
                        onPress={() => setPassword(true)}>
                        Next
                      </Button>
                    </View>
                  )}
                </View>
              </>
            )}
          </KeyboardAvoidingView>
          {password && (
            <>
              <View style={Styles.passwordroot}>
                <View>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={ImagePath.fingerprint}
                      style={Styles.passwordbackimage}
                      resizeMode="stretch"
                    />
                  </View>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      label="Create Password"
                      mode="outlined"
                    />
                  </View>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      label="Confirm Password"
                      mode="outlined"
                    />
                  </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Button
                    mode="contained"
                    style={{width: 100, marginVertical: 10}}
                    theme={{roundness: 10}}>
                    Submit
                  </Button>
                </View>
              </View>
            </>
          )}
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <Image
            resizeMode="stretch"
            source={ImagePath.forgotbottom}
            style={globalStyles.Image}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Forgot;
