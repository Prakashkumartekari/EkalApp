import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {NavigationString} from '../../../../constants/navigationName';
import {globalStyles} from '../../../../constants/globalStyle';
import useLogin from '../../../../hooks/useLogin';
import Styles from './style';
import ImagePath from '../../../../constants/ImagePath';

const Login = ({navigation}) => {
  const loginerror = useSelector(state => state.auth.loginError);
  const {username, password, setPassword, setUsername, errors, handleSigin} =
    useLogin();
  const [eyestate, setEyestate] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Styles.root}>
        <View style={Styles.box}>
          <View>
            <Image
              source={ImagePath.loginhead}
              resizeMode="stretch"
              style={Styles.Image}
            />
          </View>
        </View>
        <View style={{flex: 2, marginTop: -30}}>
          <Image
            source={ImagePath.loginmiddle}
            style={Styles.middleimage}
            resizeMode="stretch"
          />
          <View style={Styles.content_container}>
            <View>
              {loginerror && (
                <Text style={Styles.loginerror}>
                  Username or Password not valid
                </Text>
              )}
              <View>
                <Text style={Styles.signintext}>Sign In Your Account</Text>
              </View>
              <View style={Styles.textinputContainer}>
                <View>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      value={username}
                      onChangeText={text => setUsername(text)}
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      label="Enter Email or Mobile No"
                      mode="outlined"
                    />
                  </View>
                  {errors.username && (
                    <Text style={Styles.errorText}>Username is required</Text>
                  )}
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      secureTextEntry={!eyestate}
                      onChangeText={text => setPassword(text)}
                      right={
                        <TextInput.Icon
                          name={eyestate ? 'eye' : 'eye-off'}
                          onPress={() => setEyestate(!eyestate)}
                        />
                      }
                      style={globalStyles.inputField}
                      value={password}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      label="Enter Your Password"
                      mode="outlined"
                    />
                  </View>
                  {errors.password && (
                    <Text style={Styles.errorText}>Password is required</Text>
                  )}
                </View>
                <TouchableOpacity
                  style={Styles.forgotpasswordContainer}
                  onPress={() => navigation.navigate(NavigationString.Forgot)}>
                  <Text style={[Styles.linktext]}>Forgot Your Password?</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'flex-end'}}>
                  <Button
                    mode="contained"
                    onPress={handleSigin}
                    style={Styles.button}
                    raised
                    theme={{roundness: 30}}>
                    Login
                  </Button>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={[Styles.linktext, Styles.notregisterbutton]}>
                  Not Register Yet?
                  <Text
                    onPress={() => navigation.navigate(NavigationString.Signup)}
                    style={{color: 'blue'}}>
                    Create an Account
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[Styles.box, {justifyContent: 'flex-end'}]}>
          <View>
            <Image
              resizeMode="stretch"
              source={ImagePath.loginbottom}
              style={Styles.Image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
