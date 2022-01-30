import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, TextInput, Portal, Dialog, Checkbox} from 'react-native-paper';
import {Styles} from './style';
import useSignup from '../../../../hooks/useSignup';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  closeDialog,
  closeEmailDialog,
  closeerror,
  closeMobileDialog,
} from '../../../../redux/reducer/auth/MobileEmailReducer';
import ImagePath from '../../../../constants/ImagePath';
import {useNavigation} from '@react-navigation/core';
import {globalStyles} from '../../../../constants/globalStyle';
import {primaryColor2} from '../../../config.json';
import Entypo from 'react-native-vector-icons/Entypo';
const Signup = () => {
  const navigation = useNavigation();
  const {
    sendMobileOtp,
    sendEmailOtp,
    verifyMobile,
    verifyEmail,
    mobilespinner,
    emailspinner,
    error,
    signupError,
  } = useSelector(state => state.MobileEmail);
  const dispatch = useDispatch();
  const {
    state,
    Actions,
    date,
    show,
    datetext,
    timer,
    setShow,
    onChangeDate,
    onSelectClick,
    onSelectItemClick,
    onChange,
    FirstPage,
    SecondPage,
    LastPage,
    congrats,
    handleVerifyEmailOtp,
    handleVerifyMobileOtp,
  } = useSignup();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <>
        <ScrollView>
          <StatusBar backgroundColor={primaryColor2} />
          <SafeAreaView style={Styles.root}>
            <View>
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

            <View style={Styles.content_container}>
              <View>
                <Text style={Styles.header}>Signup Account</Text>
              </View>
              {state.personal && (
                <>
                  <View>
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        value={state.firstName}
                        onChangeText={text => onChange(Actions.firstName, text)}
                        theme={{roundness: 10}}
                        label="First Name"
                        mode="outlined"
                      />
                    </View>
                    {state.errorfirstpage.firstName && (
                      <Text style={Styles.red}>
                        {state.errorfirstpage.firstName}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        value={state.middleName}
                        onChangeText={text =>
                          onChange(Actions.middleName, text)
                        }
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        label="Middle Name"
                        mode="outlined"
                      />
                    </View>

                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        value={state.lastName}
                        onChangeText={text => onChange(Actions.lastName, text)}
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        label="LastName"
                        mode="outlined"
                      />
                    </View>

                    <TouchableOpacity
                      onPress={() => onSelectClick(Actions.selectRole)}>
                      <View style={globalStyles.inputFieldContainer}>
                        <View style={globalStyles.selectionFieldContainer}>
                          <Text style={globalStyles.selectionFieldText}>
                            {state.role ? state.role : 'Select Role'}
                          </Text>
                          <Entypo
                            name={
                              state.roleselect
                                ? 'chevron-small-up'
                                : 'chevron-small-down'
                            }
                            size={35}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {state.errorfirstpage.role && (
                      <Text style={Styles.red}>
                        {state.errorfirstpage.role}
                      </Text>
                    )}
                    {state.roleselect && (
                      <View style={globalStyles.selection_container}>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.role === 'Parent'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.role,
                              data: 'Parent',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.role === 'Parent'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Parent
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.role === 'Staff'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.role,
                              data: 'Staff',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.role === 'Staff'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Staff
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.role === 'Director'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.role,
                              data: 'Director',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.role === 'Director'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Director
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity
                      onPress={() => onSelectClick(Actions.selectGender)}>
                      <View style={globalStyles.inputFieldContainer}>
                        <View style={globalStyles.selectionFieldContainer}>
                          <Text style={globalStyles.selectionFieldText}>
                            {state.gender ? state.gender : 'Select Gender'}
                          </Text>
                          <Entypo
                            name={
                              state.genderselect
                                ? 'chevron-small-up'
                                : 'chevron-small-down'
                            }
                            size={35}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {state.errorfirstpage.gender && (
                      <Text style={Styles.red}>
                        {state.errorfirstpage.gender}
                      </Text>
                    )}
                    {state.genderselect && (
                      <View style={globalStyles.selection_container}>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.gender === 'Male'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.gender,
                              data: 'Male',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.gender === 'Male'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Male
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.gender === 'Female'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.gender,
                              data: 'Female',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.gender === 'Female'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Female
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.gender === 'Other'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.gender,
                              data: 'Other',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.gender === 'Other'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Other
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity onPress={() => setShow(true)}>
                      <View style={globalStyles.inputFieldContainer}>
                        <View style={globalStyles.selectionFieldContainer}>
                          <Text style={globalStyles.selectionFieldText}>
                            {datetext}
                          </Text>
                          <Entypo name="chevron-small-down" size={35} />
                        </View>
                        {show && (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            style={{backgroundColor: 'red'}}
                            mode="date"
                            maximumDate={new Date()}
                            display="calendar"
                            onChange={onChangeDate}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    {state.errorfirstpage.dateofbirth && (
                      <Text style={Styles.red}>
                        {state.errorfirstpage.dateofbirth}
                      </Text>
                    )}
                  </View>

                  <View style={{alignItems: 'flex-end'}}>
                    <Button
                      mode="contained"
                      theme={{roundness: 30}}
                      style={Styles.button}
                      onPress={() => FirstPage()}>
                      Next
                    </Button>
                  </View>
                </>
              )}
              {state.addressview && (
                <>
                  <View>
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        multiline
                        numberOfLines={3}
                        value={state.address}
                        onChangeText={text => onChange(Actions.address, text)}
                        theme={{roundness: 10}}
                        label="Address"
                        mode="outlined"
                      />
                    </View>
                    {state.errorsecondpage.address && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.address}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        value={state.pincode}
                        onChangeText={text => onChange(Actions.pincode, text)}
                        theme={{roundness: 10}}
                        label="Pin Code"
                        mode="outlined"
                      />
                    </View>
                    {state.errorsecondpage.pincode && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.pincode}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        value={state.state}
                        onChangeText={text => onChange(Actions.state, text)}
                        theme={{roundness: 10}}
                        label="State"
                        mode="outlined"
                      />
                    </View>
                    {state.errorsecondpage.state && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.state}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        value={state.district}
                        onChangeText={text => onChange(Actions.district, text)}
                        theme={{roundness: 10}}
                        label="District"
                        mode="outlined"
                      />
                    </View>
                    {state.errorsecondpage.district && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.district}
                      </Text>
                    )}
                    <TouchableOpacity
                      onPress={() => onSelectClick(Actions.selectLanguage)}>
                      <View style={globalStyles.inputFieldContainer}>
                        <View style={globalStyles.selectionFieldContainer}>
                          <Text style={globalStyles.selectionFieldText}>
                            {state.language
                              ? state.language
                              : 'Language Medium'}
                          </Text>
                          <Entypo
                            name={
                              state.languageselect
                                ? 'chevron-small-up'
                                : 'chevron-small-down'
                            }
                            size={35}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {state.errorsecondpage.language && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.language}
                      </Text>
                    )}
                    {state.languageselect && (
                      <View style={globalStyles.selection_container}>
                        <TouchableOpacity
                          style={Styles.checkboaxbutton}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.hindi,
                              data: 'Hindi',
                            })
                          }>
                          <Checkbox
                            status={state.hindi ? 'checked' : 'unchecked'}
                            color={primaryColor2}
                          />
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              Styles.selectedText,
                            ]}>
                            Hindi
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={Styles.checkboaxbutton}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.english,
                              data: 'English',
                            })
                          }>
                          <Checkbox
                            status={state.english ? 'checked' : 'unchecked'}
                            color={primaryColor2}
                          />
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              Styles.selectedText,
                            ]}>
                            English
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity
                      onPress={() => onSelectClick(Actions.selectype)}>
                      <View style={globalStyles.inputFieldContainer}>
                        <View style={globalStyles.selectionFieldContainer}>
                          <Text style={globalStyles.selectionFieldText}>
                            {state.type ? state.type : 'School Type'}
                          </Text>
                          <Entypo
                            name={
                              state.typeselect
                                ? 'chevron-small-up'
                                : 'chevron-small-down'
                            }
                            size={35}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {state.errorsecondpage.type && (
                      <Text style={Styles.red}>
                        {state.errorsecondpage.type}
                      </Text>
                    )}
                    {state.typeselect && (
                      <View style={globalStyles.selection_container}>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.type === 'Co-Ed'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.type,
                              data: 'Co-Ed',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.type === 'Co-Ed'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Co-Ed
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.type === 'Boys'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.type,
                              data: 'Boys',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.type === 'Boys'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Boys
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.selectionItem,
                            state.type === 'Girls'
                              ? globalStyles.selectitembackground
                              : null,
                          ]}
                          onPress={() =>
                            onSelectItemClick({
                              type: Actions.type,
                              data: 'Girls',
                            })
                          }>
                          <Text
                            style={[
                              globalStyles.selection_Text,
                              state.type === 'Girls'
                                ? globalStyles.selectitemtext
                                : null,
                            ]}>
                            Girls
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Button
                      mode="contained"
                      theme={{roundness: 30}}
                      style={{elevation: 10, width: 100}}
                      onPress={SecondPage}>
                      Next
                    </Button>
                  </View>
                </>
              )}
              {state.last && (
                <>
                  <View style={Styles.content_container2}>
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        label="Mobile No"
                        value={state.mobileno}
                        onChangeText={text => onChange(Actions.mobileno, text)}
                        mode="outlined"
                      />
                    </View>
                    {state.errorlastpage.mobileno && (
                      <Text style={Styles.red}>
                        {state.errorlastpage.mobileno}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        label="Email Id"
                        onChangeText={text => onChange(Actions.emailid, text)}
                        value={state.emailid}
                        mode="outlined"
                      />
                    </View>
                    {state.errorlastpage.emailid && (
                      <Text style={Styles.red}>
                        {state.errorlastpage.emailid}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        label="Create Password"
                        secureTextEntry
                        onChangeText={text =>
                          onChange(Actions.createpassword, text)
                        }
                        value={state.createpassword}
                        mode="outlined"
                      />
                    </View>
                    {state.errorlastpage.createpassword && (
                      <Text style={Styles.red}>
                        {state.errorlastpage.createpassword}
                      </Text>
                    )}
                    <View style={globalStyles.inputFieldContainer}>
                      <TextInput
                        style={globalStyles.inputField}
                        outlineColor="#fff"
                        theme={{roundness: 10}}
                        onChangeText={text =>
                          onChange(Actions.confirmpasswor, text)
                        }
                        value={state.confirmpasswor}
                        label="Confirm Password"
                        secureTextEntry
                        mode="outlined"
                      />
                    </View>
                    {state.errorlastpage.confirmpasswor && (
                      <Text style={Styles.red}>
                        {state.errorlastpage.confirmpasswor}
                      </Text>
                    )}
                    <View style={{alignItems: 'flex-end'}}>
                      <Button
                        mode="contained"
                        theme={{roundness: 30}}
                        style={Styles.button}
                        onPress={LastPage}>
                        Next
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
                style={{width: '100%'}}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
        <Portal>
          <Dialog visible={state.parent || state.staff || state.director}>
            <Dialog.Content>
              <Text style={{color: 'green', fontSize: 40, textAlign: 'center'}}>
                Congratulation!!
              </Text>
              <Text style={{color: '#000', textAlign: 'center'}}>
                You have Registerd with Ekalsutra
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                mode="contained"
                color="green"
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  elevation: 30,
                }}
                theme={{roundness: 30}}
                onPress={congrats}>
                Login
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={sendEmailOtp || sendMobileOtp}>
            <Dialog.Content>
              {state.role === 'Parent' && (
                <>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      keyboardType="number-pad"
                      label="Verify Mobile Otp"
                      onChangeText={text => onChange(Actions.mobileotp, text)}
                      value={state.mobileotp}
                      mode="outlined"
                    />
                  </View>
                  {state.errorotp.mobileotp && (
                    <Text style={Styles.red}>{state.errorotp.mobileotp}</Text>
                  )}
                  {error && <Text style={Styles.red}>{error}</Text>}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      loading={mobilespinner}
                      mode="contained"
                      disabled={verifyMobile}
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      theme={{roundness: 30}}
                      onPress={handleVerifyMobileOtp}>
                      {verifyMobile ? 'Verified' : 'Verify'}
                    </Button>
                    <Button
                      theme={{roundness: 30}}
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      mode="contained"
                      disabled={timer === 0 ? false : true}>
                      {timer === 0 ? 'Resend' : `Resend (${timer})`}
                    </Button>
                  </View>
                </>
              )}
              {state.role === 'Staff' && (
                <>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      keyboardType="number-pad"
                      label="Verify Email Otp"
                      onChangeText={text => onChange(Actions.emailotp, text)}
                      value={state.emailotp}
                      mode="outlined"
                    />
                  </View>
                  {state.errorotp.emailotp && (
                    <Text style={Styles.red}>{state.errorotp.emailotp}</Text>
                  )}
                  {error && <Text style={Styles.red}>{error}</Text>}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      loading={emailspinner}
                      disabled={verifyEmail}
                      mode="contained"
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      theme={{roundness: 30}}
                      onPress={handleVerifyEmailOtp}>
                      {verifyEmail ? 'Verified' : ' Verify'}
                    </Button>
                    <Button
                      theme={{roundness: 30}}
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      mode="contained"
                      disabled={timer === 0 ? false : true}>
                      {timer === 0 ? 'Resend' : `Resend (${timer})`}
                    </Button>
                  </View>
                </>
              )}
              {state.role === 'Director' && (
                <>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      keyboardType="number-pad"
                      label="Email Otp"
                      onChangeText={text => onChange(Actions.emailotp, text)}
                      value={state.emailotp}
                      mode="outlined"
                    />
                  </View>
                  {state.errorotp.emailotp && (
                    <Text style={Styles.red}>{state.errorotp.emailotp}</Text>
                  )}
                  {error && <Text style={Styles.red}>{error}</Text>}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      loading={emailspinner}
                      disabled={verifyEmail}
                      mode="contained"
                      style={{
                        marginRight: 5,
                        elevation: 30,
                        paddingHorizontal: 10,
                      }}
                      theme={{roundness: 30}}
                      onPress={handleVerifyEmailOtp}>
                      {verifyEmail ? 'Verified' : 'Verify'}
                    </Button>
                    <Button
                      theme={{roundness: 30}}
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      mode="contained"
                      disabled={timer === 0 ? false : true}>
                      {timer === 0 ? 'Resend' : `Resend (${timer})`}
                    </Button>
                  </View>
                  <View style={globalStyles.inputFieldContainer}>
                    <TextInput
                      style={globalStyles.inputField}
                      outlineColor="#fff"
                      theme={{roundness: 10}}
                      label="Mobile Otp"
                      keyboardType="number-pad"
                      onChangeText={text => onChange(Actions.mobileotp, text)}
                      value={state.mobileotp}
                      mode="outlined"
                    />
                  </View>
                  {state.errorotp.mobileotp && (
                    <Text style={Styles.red}>{state.errorotp.mobileotp}</Text>
                  )}
                  {error && <Text style={Styles.red}>{error}</Text>}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      loading={mobilespinner}
                      disabled={verifyMobile}
                      mode="contained"
                      style={{
                        marginRight: 5,
                        elevation: 30,
                        paddingHorizontal: 10,
                      }}
                      theme={{roundness: 30}}
                      onPress={handleVerifyEmailOtp}>
                      {verifyMobile ? 'Verified' : ' Verify'}
                    </Button>
                    <Button
                      theme={{roundness: 30}}
                      style={{
                        marginRight: 5,
                        elevation: 30,
                      }}
                      mode="contained"
                      disabled={timer === 0 ? false : true}>
                      {timer === 0 ? 'Resend' : `Resend (${timer})`}
                    </Button>
                  </View>
                </>
              )}
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                mode="contained"
                onPress={() => dispatch(closeDialog())}
                style={{marginRight: 5, elevation: 30, paddingHorizontal: 5}}
                theme={{roundness: 30}}>
                Cancel
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={error}>
            <Dialog.Content>
              <Text style={Styles.signupError}>{error}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                mode="contained"
                onPress={() => dispatch(closeerror())}
                style={{marginRight: 5, elevation: 30, paddingHorizontal: 5}}
                theme={{roundness: 30}}>
                ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
