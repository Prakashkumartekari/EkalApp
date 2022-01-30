/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';

import useHome from '../hooks/useHome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {primaryColor2} from '../../config.json';
import {globalStyles} from '../../../constants/globalStyle';
import {useSelector} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dashboard} from '..';
import ImagePath from '../../../constants/ImagePath';

const Ok = () => {
  const {homeok} = useHome();
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          elevation: 10,
          paddingHorizontal: 30,
          paddingVertical: 30,
          marginVertical: '50%',
          marginHorizontal: '5%',
        }}>
        <Text style={{fontSize: 18, lineHeight: 30, textAlign: 'center'}}>
          Before Apply in Any School You Have To Update Your Profile.
        </Text>
        <View style={{alignItems: 'center'}}>
          <Button
            mode="contained"
            onPress={homeok}
            theme={{roundness: 30}}
            style={{
              elevation: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            Ok
          </Button>
        </View>
      </View>
    </View>
  );
};
const PersonalDetail = () => {
  const {
    state,
    Actions,
    date,
    show,
    datetext,
    setShow,
    onChangeDate,
    onChange,
    onSelectClick,
    onSelectItemClick,
    PersonalPage,
  } = useHome();
  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          style={{backgroundColor: 'blue'}}
          maximumDate={new Date()}
          display="calendar"
          onChange={onChangeDate}
        />
      )}
      <View style={{marginVertical: 20}}>
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
        {state.errorPersonalPage.firstName && (
          <Text style={Styles.red}>{state.errorPersonalPage.firstName}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.middleName}
            onChangeText={text => onChange(Actions.middleName, text)}
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
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.mobileno}
            onChangeText={text => onChange(Actions.mobileno, text)}
            style={globalStyles.inputField}
            outlineColor="#fff"
            editable={false}
            theme={{roundness: 10}}
            label="Mobile No"
            mode="outlined"
          />
        </View>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.alternateno}
            onChangeText={text => onChange(Actions.alternateno, text)}
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Alternate Number"
            keyboardType="number-pad"
            mode="outlined"
          />
        </View>
        {state.errorPersonalPage.alternateno && (
          <Text style={Styles.red}>{state.errorPersonalPage.alternateno}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.emailid}
            editable={false}
            onChangeText={text => onChange(Actions.emailid, text)}
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Email id"
            mode="outlined"
          />
        </View>
        <TouchableOpacity onPress={() => onSelectClick(Actions.selectMarital)}>
          <View style={globalStyles.inputFieldContainer}>
            <View style={globalStyles.selectionFieldContainer}>
              <Text style={globalStyles.selectionFieldText}>
                {state.marital ? state.marital : 'Marital Status'}
              </Text>
              <Entypo
                name={
                  state.maritalselect
                    ? 'chevron-small-up'
                    : 'chevron-small-down'
                }
                size={35}
              />
            </View>
          </View>
        </TouchableOpacity>
        {state.errorPersonalPage.marital && (
          <Text style={Styles.red}>{state.errorPersonalPage.marital}</Text>
        )}
        {state.maritalselect && (
          <View style={globalStyles.selection_container}>
            <TouchableOpacity
              style={[
                globalStyles.selectionItem,
                state.marital === 'Married'
                  ? globalStyles.selectitembackground
                  : null,
              ]}
              onPress={() =>
                onSelectItemClick({
                  type: Actions.marital,
                  data: 'Married',
                })
              }>
              <Text
                style={[
                  globalStyles.selection_Text,
                  state.marital === 'Married'
                    ? globalStyles.selectitemtext
                    : null,
                ]}>
                Married
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.selectionItem,
                state.marital === 'UnMarried'
                  ? globalStyles.selectitembackground
                  : null,
              ]}
              onPress={() =>
                onSelectItemClick({
                  type: Actions.marital,
                  data: 'UnMarried',
                })
              }>
              <Text
                style={[
                  globalStyles.selection_Text,
                  state.marital === 'UnMarried'
                    ? globalStyles.selectitemtext
                    : null,
                ]}>
                UnMarried
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => onSelectClick(Actions.selectGender)}>
          <View style={globalStyles.inputFieldContainer}>
            <View style={globalStyles.selectionFieldContainer}>
              <Text style={globalStyles.selectionFieldText}>
                {state.gender ? state.gender : 'Select Gender'}
              </Text>
              <Entypo
                name={
                  state.genderselect ? 'chevron-small-up' : 'chevron-small-down'
                }
                size={35}
              />
            </View>
          </View>
        </TouchableOpacity>
        {state.errorPersonalPage.gender && (
          <Text style={Styles.red}>{state.errorPersonalPage.gender}</Text>
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
                  state.gender === 'Male' ? globalStyles.selectitemtext : null,
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
                  state.gender === 'Other' ? globalStyles.selectitemtext : null,
                ]}>
                Other
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={globalStyles.inputFieldContainer}>
            <View style={globalStyles.selectionFieldContainer}>
              <Text style={globalStyles.selectionFieldText}>{datetext}</Text>
              <Entypo name="chevron-small-down" size={35} />
            </View>
          </View>
        </TouchableOpacity>
        {state.errorPersonalPage.dateofbirth && (
          <Text style={globalStyles.red}>
            {state.errorPersonalPage.dateofbirth}
          </Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.pannumber}
            onChangeText={text => onChange(Actions.pannumber, text)}
            theme={{roundness: 10}}
            label="Pan Number"
            mode="outlined"
          />
        </View>
        {state.errorPersonalPage.pannumber && (
          <Text style={globalStyles.red}>
            {state.errorPersonalPage.pannumber}
          </Text>
        )}
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
          onPress={PersonalPage}>
          Next
        </Button>
      </View>
    </>
  );
};
const Parent = () => {
  const {state, Actions, onChange, ParentsPage} = useHome();
  return (
    <>
      <Text style={{marginVertical: 10, fontSize: 16}}>Father's Name</Text>
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.fatherfirst}
          onChangeText={text => onChange(Actions.fatherfirst, text)}
          theme={{roundness: 10}}
          label="First Name"
          mode="outlined"
        />
      </View>
      {state.errorParentPage.fatherfirst && (
        <Text style={globalStyles.red}>
          {state.errorParentPage.fatherfirst}
        </Text>
      )}
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.fathermiddle}
          onChangeText={text => onChange(Actions.fathermiddle, text)}
          theme={{roundness: 10}}
          label="Middle Name"
          mode="outlined"
        />
      </View>
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.fatherlast}
          onChangeText={text => onChange(Actions.fatherlast, text)}
          theme={{roundness: 10}}
          label="Last Name"
          mode="outlined"
        />
      </View>
      <Text style={{marginVertical: 10, fontSize: 16}}>Mother's Name</Text>
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.motherfirst}
          onChangeText={text => onChange(Actions.motherfirst, text)}
          theme={{roundness: 10}}
          label="First Name"
          mode="outlined"
        />
      </View>
      {state.errorParentPage.motherfirst && (
        <Text style={globalStyles.red}>
          {state.errorParentPage.motherfirst}
        </Text>
      )}
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.mothermiddle}
          onChangeText={text => onChange(Actions.mothermiddle, text)}
          theme={{roundness: 10}}
          label="Middle Name"
          mode="outlined"
        />
      </View>
      <View style={globalStyles.inputFieldContainer}>
        <TextInput
          style={globalStyles.inputField}
          outlineColor="#fff"
          value={state.motherlast}
          onChangeText={text => onChange(Actions.motherlast, text)}
          theme={{roundness: 10}}
          label="Last Name"
          mode="outlined"
        />
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
          onPress={ParentsPage}>
          Next
        </Button>
      </View>
    </>
  );
};
const AddressDetail = () => {
  const {state, Actions, onChange, AddressPage} = useHome();
  return (
    <>
      <View style={{marginVertical: 20}}>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            multiline
            numberOfLines={3}
            value={state.address}
            onChangeText={text => onChange(Actions.address, text)}
            theme={{roundness: 10}}
            label=" Temporary Address"
            mode="outlined"
          />
        </View>
        {state.errorAddressPage.address && (
          <Text style={globalStyles.red}>{state.errorAddressPage.address}</Text>
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
        {state.errorAddressPage.pincode && (
          <Text style={globalStyles.red}>{state.errorAddressPage.pincode}</Text>
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
        {state.errorAddressPage.state && (
          <Text style={globalStyles.red}>{state.errorAddressPage.state}</Text>
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
        {state.errorAddressPage.district && (
          <Text style={globalStyles.red}>
            {state.errorAddressPage.district}
          </Text>
        )}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => onChange(Actions.sameas, true)}>
          <Checkbox
            status={state.sameas ? 'checked' : 'unchecked'}
            color={primaryColor2}
          />
          <Text>Same as Temporary</Text>
        </TouchableOpacity>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            multiline
            numberOfLines={3}
            value={state.address2}
            onChangeText={text => onChange(Actions.address2, text)}
            theme={{roundness: 10}}
            label=" Permanent Address"
            mode="outlined"
          />
        </View>
        {state.errorAddressPage.address2 && (
          <Text style={globalStyles.red}>
            {state.errorAddressPage.address2}
          </Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.pincode2}
            onChangeText={text => onChange(Actions.pincode2, text)}
            theme={{roundness: 10}}
            label="Pin Code"
            mode="outlined"
          />
        </View>
        {state.errorAddressPage.pincode2 && (
          <Text style={globalStyles.red}>
            {state.errorAddressPage.pincode2}
          </Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.state2}
            onChangeText={text => onChange(Actions.state2, text)}
            theme={{roundness: 10}}
            label="State"
            mode="outlined"
          />
        </View>
        {state.errorAddressPage.state2 && (
          <Text style={globalStyles.red}>{state.errorAddressPage.state2}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.district2}
            onChangeText={text => onChange(Actions.district2, text)}
            theme={{roundness: 10}}
            label="District"
            mode="outlined"
          />
        </View>
      </View>
      {state.errorAddressPage.district2 && (
        <Text style={globalStyles.red}>{state.errorAddressPage.district2}</Text>
      )}
      <View style={{alignItems: 'flex-end'}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
          onPress={AddressPage}>
          Next
        </Button>
      </View>
    </>
  );
};
const BankDetail = () => {
  const {state, Actions, onChange, BankPage} = useHome();
  return (
    <>
      <View style={{marginVertical: 20}}>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Bank Name"
            value={state.bank}
            onChangeText={text => onChange(Actions.bank, text)}
            mode="outlined"
          />
        </View>
        {state.errorBankPage.bank && (
          <Text style={globalStyles.red}>{state.errorBankPage.bank}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Branch"
            onChangeText={text => onChange(Actions.branch, text)}
            value={state.branch}
            mode="outlined"
          />
        </View>
        {state.errorBankPage.branch && (
          <Text style={globalStyles.red}>{state.errorBankPage.branch}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            onChangeText={text => onChange(Actions.ifsc, text)}
            value={state.ifsc}
            label="IFSC Code"
            mode="outlined"
          />
        </View>
        {state.errorBankPage.ifsc && (
          <Text style={globalStyles.red}>{state.errorBankPage.ifsc}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Account Number"
            onChangeText={text => onChange(Actions.accountnumber, text)}
            value={state.accountnumber}
            mode="outlined"
          />
        </View>
        {state.errorBankPage.accountnumber && (
          <Text style={globalStyles.red}>
            {state.errorBankPage.accountnumber}
          </Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            onChangeText={text => onChange(Actions.accountholder, text)}
            value={state.accountholder}
            label="Account Holder Name"
            mode="outlined"
          />
        </View>
        {state.errorBankPage.accountholder && (
          <Text style={globalStyles.red}>
            {state.errorBankPage.accountholder}
          </Text>
        )}
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
          onPress={BankPage}>
          Next
        </Button>
      </View>
    </>
  );
};
const ExperienceDetail = () => {
  const {
    state,
    Actions,
    date2,
    date3,
    datetext2,
    datetext3,
    show2,
    show3,
    ExperiencePage,
    setShow2,
    setShow3,
    onChange,
    onChangeDate2,
    onChangeDate3,
    LastPage,
  } = useHome();
  return (
    <>
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode="date"
          style={{backgroundColor: 'blue'}}
          maximumDate={new Date()}
          display="calendar"
          onChange={onChangeDate2}
        />
      )}
      {show3 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date3}
          mode="date"
          style={{backgroundColor: 'blue'}}
          maximumDate={new Date()}
          display="calendar"
          onChange={onChangeDate3}
        />
      )}
      <View>
        <TouchableOpacity
          onPress={() => setShow2(true)}
          style={[
            globalStyles.inputFieldContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 15,
              paddingHorizontal: 20,
            },
          ]}>
          <Text style={{fontSize: 17}}>{datetext2}</Text>
          <AntDesign name="calendar" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShow3(true)}
          style={[
            globalStyles.inputFieldContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 15,
              paddingHorizontal: 20,
            },
          ]}>
          <Text style={{fontSize: 17}}>{datetext3}</Text>
          <AntDesign name="calendar" size={30} />
        </TouchableOpacity>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Employe's Name"
            value={state.employename}
            onChangeText={text => onChange(Actions.employename, text)}
            mode="outlined"
          />
        </View>

        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Designation"
            value={state.designation}
            onChangeText={text => onChange(Actions.designation, text)}
            mode="outlined"
          />
        </View>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Work On"
            value={state.workon}
            onChangeText={text => onChange(Actions.workon, text)}
            mode="outlined"
          />
        </View>
        <TouchableOpacity
          style={[
            globalStyles.inputFieldContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: '#2789FD',
            },
          ]}>
          <AntDesign name="plus" size={30} />
          <Text style={{fontSize: 17, marginLeft: 10}}>Add More</Text>
        </TouchableOpacity>

        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Experience"
            value={state.experience}
            onChangeText={text => onChange(Actions.experience, text)}
            mode="outlined"
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            mode="contained"
            theme={{roundness: 30}}
            style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
            onPress={ExperiencePage}>
            Submit
          </Button>
        </View>
      </View>
    </>
  );
};
const DirectorHome = () => {
  const [state, setstate] = useState({
    ok: true,
    logo: false,
    profile: false,
    pending: false,
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.ok && (
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: '8%',
            paddingHorizontal: '8%',
            elevation: 10,
            marginHorizontal: '5%',
            borderRadius: 10,
          }}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 24}}>
            Congratulation !
          </Text>

          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              lineHeight: 27,
              textTransform: 'capitalize',
            }}>
            You have successfully registered with india's Best school management
            system
          </Text>
          <View style={{marginTop: '8%', alignItems: 'center'}}>
            <Button
              onPress={() => setstate({...state, ok: false, logo: true})}
              mode="contained"
              theme={{roundness: 30}}
              style={{elevation: 30, paddingHorizontal: '8%'}}>
              Ok
            </Button>
          </View>
        </View>
      )}
      {state.logo && (
        <View style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Image
                source={ImagePath.userjpg}
                style={{height: 200, width: 200, borderRadius: 200}}
              />
              <Button
                mode="contained"
                theme={{roundness: 30}}
                style={{elevation: 30, marginTop: '10%'}}>
                Upload Your School Logo
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-end',
                marginBottom: '10%',
              }}>
              <Button
                mode="contained"
                theme={{roundness: 30}}
                color="green"
                style={{
                  elevation: 30,
                  marginTop: '10%',
                  paddingHorizontal: '4%',
                  marginRight: '-12%',
                }}
                onPress={() =>
                  setstate({...state, logo: false, profile: true})
                }>
                Submit
              </Button>
            </View>
          </View>
        </View>
      )}
      {state.profile && (
        <View style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Image
                source={ImagePath.userjpg}
                style={{height: 200, width: 200, borderRadius: 20}}
              />
              <Button
                mode="contained"
                theme={{roundness: 30}}
                style={{elevation: 30, marginTop: '10%'}}>
                Upload Your Profile Photo
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-end',
                marginBottom: '10%',
              }}>
              <Button
                mode="contained"
                theme={{roundness: 30}}
                color="green"
                style={{
                  elevation: 30,
                  marginTop: '10%',
                  paddingHorizontal: '4%',
                  marginRight: '-12%',
                }}
                onPress={() =>
                  setstate({...state, profile: false, pending: true})
                }>
                Submit
              </Button>
            </View>
          </View>
        </View>
      )}
      {state.pending && (
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: '8%',
            paddingHorizontal: '8%',
            elevation: 10,
            marginHorizontal: '5%',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              lineHeight: 27,
              textTransform: 'capitalize',
            }}>
            Your Account pending to approve,Please contact to our support team.
          </Text>
        </View>
      )}
    </View>
  );
};
const ParentHome = () => {
  const [state, setstate] = useState({
    ok: true,
    search: false,
    child: false,
    parent: false,
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {state.ok && (
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: '8%',
              paddingHorizontal: '8%',
              elevation: 10,
              marginHorizontal: '5%',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                fontSize: 22,
                lineHeight: 27,
                textTransform: 'capitalize',
              }}>
              Before apply in any school you have to add minimum one child
            </Text>
            <View style={{marginTop: '8%', alignItems: 'center'}}>
              <Button
                onPress={() => setstate({...state, ok: false, search: true})}
                mode="contained"
                theme={{roundness: 30}}
                style={{elevation: 30, paddingHorizontal: '8%'}}>
                Ok
              </Button>
            </View>
          </View>
        )}
        {state.search && (
          <View style={{flex: 1, width: '100%', paddingHorizontal: '10%'}}>
            <View style={{marginTop: '5%'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: '#000',
                  marginVertical: '5%',
                }}>
                Search Child Information
              </Text>
              <TextInput
                label="Enter Child Aadhar Number"
                mode="outlined"
                theme={{roundness: 10}}
                style={{marginVertical: '10%'}}
              />
              <Button
                mode="contained"
                onPress={() =>
                  setstate({...state, search: false, child: true})
                }>
                Search
              </Button>
            </View>
          </View>
        )}
        {state.child && (
          <View style={{flex: 1, width: '100%', padding: '5%'}}>
            <TouchableOpacity
              onPress={() => setstate({...state, child: false, search: true})}>
              <AntDesign name="arrowleft" size={30} color="#000" />
            </TouchableOpacity>
            <View style={{marginHorizontal: '5%', marginVertical: '5%'}}>
              <Text style={{fontSize: 20, color: '#000'}}>
                Child Information
              </Text>
              <View
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: '7%',
                  paddingVertical: '8%',
                  elevation: 10,
                  marginVertical: '10%',
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#5F5252',
                        marginVertical: '2%',
                      }}>
                      Shubham Kumar
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#5F5252',
                        marginVertical: '2%',
                      }}>
                      Class: 4th-A
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#5F5252',
                        marginVertical: '2%',
                      }}>
                      Reg No. 27
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={ImagePath.userjpg}
                      style={{height: 100, width: 100}}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setstate({...state, child: false, parent: true})}
                style={{
                  backgroundColor: primaryColor2,
                  paddingVertical: '3%',
                  width: '100%',
                  alignItems: 'center',
                  elevation: 20,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <AntDesign name="plus" size={20} color="#fff" />
                  <Text style={{color: '#fff', fontSize: 16, marginLeft: '1%'}}>
                    Add Child
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {state.parent && (
          <View style={{flex: 1, width: '100%', padding: '5%'}}>
            <TouchableOpacity
              onPress={() => setstate({...state, child: true, parent: false})}>
              <AntDesign name="arrowleft" size={30} color="#000" />
            </TouchableOpacity>
            <View style={{marginHorizontal: '5%', marginVertical: '5%'}}>
              <Text style={{fontSize: 20, color: '#000'}}>
                Child's Parent Information
              </Text>
              <View style={{marginTop: '10%'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#5F5252',
                      textAlign: 'center',
                    }}>
                    Father's Mobile No. +91 *******123
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: '2%',
                    }}>
                    <View style={{flex: 1, marginRight: '5%'}}>
                      <TextInput
                        label="Enter Mobile Number"
                        mode="outlined"
                        style={{height: 40}}
                      />
                    </View>
                    <View style={{flex: 0.5}}>
                      <Button mode="contained" style={{paddingVertical: '1%'}}>
                        Verify
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: '5%'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#5F5252',
                      textAlign: 'center',
                    }}>
                    Mother's Mobile No. +91 *******123
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: '2%',
                    }}>
                    <View style={{flex: 1, marginRight: '5%'}}>
                      <TextInput
                        label="Enter Mobile Number"
                        mode="outlined"
                        style={{height: 40}}
                      />
                    </View>
                    <View style={{flex: 0.5}}>
                      <Button mode="contained" style={{paddingVertical: '1%'}}>
                        Verify
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: '5%'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#5F5252',
                      textAlign: 'center',
                    }}>
                    Guardian's Mobile No. +91 *******123
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: '2%',
                    }}>
                    <View style={{flex: 1, marginRight: '5%'}}>
                      <TextInput
                        label="Enter Mobile Number"
                        mode="outlined"
                        style={{height: 40}}
                      />
                    </View>
                    <View style={{flex: 0.5}}>
                      <Button mode="contained" style={{paddingVertical: '1%'}}>
                        Verify
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const Home = ({navigation}) => {
  const [roles, setRoles] = useState({
    parent: false,
    director: false,
    staff: false,
  });
  const {loginDetail, home} = useSelector(state => state.auth);
  const role = loginDetail?.roles;
  const updatestate = () => {
    if (role) {
      if (role[0] === 'ROLE_PARENT') {
        setRoles({...roles, parent: true});
      }
      if (role[0] === 'ROLE_ADMIN') {
        setRoles({...roles, director: true});
      }
      if (role[0] === 'ROLE_TEACHER') {
        setRoles({...roles, staff: true});
      }
    }
  };

  useEffect(() => {
    updatestate();
  }, []);

  const {state, Actions, onChange, schoolecodeverify, schoolecodesendrequest} =
    useHome();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <>
        <StatusBar backgroundColor={primaryColor2} />

        {roles.staff && (
          <>
            {(home.personal ||
              home.parent ||
              home.address ||
              home.bank ||
              home.experience) && (
              <View style={Styles.detailContainer}>
                <View
                  style={[
                    Styles.detailContainer_item,
                    home.personal ? Styles.detailContainer_itemActive : null,
                  ]}>
                  <Text
                    style={[
                      Styles.detailContainer_itemText,
                      home.personal
                        ? Styles.detailContainer_itemTextActive
                        : null,
                    ]}>
                    Personal Detail
                  </Text>
                </View>
                <View
                  style={[
                    Styles.detailContainer_item,
                    home.parent ? Styles.detailContainer_itemActive : null,
                  ]}>
                  <Text
                    style={[
                      Styles.detailContainer_itemText,
                      home.parent
                        ? Styles.detailContainer_itemTextActive
                        : null,
                    ]}>
                    Prent's Detail
                  </Text>
                </View>
                <View
                  style={[
                    Styles.detailContainer_item,
                    home.address ? Styles.detailContainer_itemActive : null,
                  ]}>
                  <Text
                    style={[
                      Styles.detailContainer_itemText,
                      home.address
                        ? Styles.detailContainer_itemTextActive
                        : null,
                    ]}>
                    Address
                  </Text>
                </View>
                <View
                  style={[
                    Styles.detailContainer_item,
                    home.bank ? Styles.detailContainer_itemActive : null,
                  ]}>
                  <Text
                    style={[
                      Styles.detailContainer_itemText,
                      home.bank ? Styles.detailContainer_itemTextActive : null,
                    ]}>
                    Bank Detail
                  </Text>
                </View>

                <View
                  style={[
                    Styles.detailContainer_item,
                    home.experience ? Styles.detailContainer_itemActive : null,
                  ]}>
                  <Text
                    style={[
                      Styles.detailContainer_itemText,
                      home.experience
                        ? Styles.detailContainer_itemTextActive
                        : null,
                    ]}>
                    Experience Detail
                  </Text>
                </View>
              </View>
            )}
            <ScrollView style={{backgroundColor: '#fff'}}>
              <View style={{paddingHorizontal: '5%', flex: 1}}>
                {home.ok && <Ok />}
                {home.personal && <PersonalDetail />}
                {home.parent && <Parent />}
                {home.address && <AddressDetail />}
                {home.bank && <BankDetail />}
                {home.experience && <ExperienceDetail />}
              </View>
              <View style={{}}>
                {home.alldone && (
                  <>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        paddingVertical: 5,
                        elevation: 10,
                      }}>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          textAlign: 'center',
                        }}>
                        You have not registered with any school yet
                      </Text>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          textAlign: 'center',
                        }}>
                        Please ask secret code of your school
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: '5%',
                        height: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        marginTop: '10%',
                      }}>
                      <Text style={{fontSize: 22}}>Enter Your School Code</Text>
                      <View style={globalStyles.inputFieldContainer}>
                        <TextInput
                          style={globalStyles.inputField}
                          outlineColor="#fff"
                          theme={{roundness: 10}}
                          label="Enter School Code"
                          mode="outlined"
                        />
                      </View>
                      {!home.schoolcodeverify && (
                        <View
                          style={{
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                          }}>
                          <Button
                            mode="contained"
                            theme={{roundness: 30}}
                            style={{
                              elevation: 10,
                              paddingHorizontal: '2%',
                              marginBottom: '7%',
                            }}
                            onPress={schoolecodeverify}>
                            Verify
                          </Button>
                        </View>
                      )}
                      {home.schoolcodeverify && (
                        <View style={{marginVertical: '10%'}}>
                          <Text style={{color: '#000', fontSize: 20}}>
                            Request For:
                          </Text>
                          <View style={globalStyles.inputFieldContainer}>
                            <TextInput
                              style={[globalStyles.inputField]}
                              outlineColor="#fff"
                              theme={{roundness: 10}}
                              label="Write Message...."
                              mode="outlined"
                              multiline
                              numberOfLines={4}
                            />
                          </View>

                          <View
                            style={{
                              alignItems: 'flex-end',
                              justifyContent: 'flex-end',
                            }}>
                            <Button
                              mode="contained"
                              theme={{roundness: 10}}
                              style={{
                                elevation: 10,
                                paddingHorizontal: '2%',
                                marginBottom: '7%',
                              }}
                              onPress={schoolecodesendrequest}>
                              Send Request
                            </Button>
                          </View>
                        </View>
                      )}
                    </View>
                  </>
                )}
              </View>
              {home.dashboard && <Dashboard />}
            </ScrollView>
          </>
        )}
        {roles.director && <DirectorHome />}
        {roles.parent && <ParentHome />}
      </>
    </TouchableWithoutFeedback>
  );
};

export default Home;

export const Styles = StyleSheet.create({
  // constants
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  fontbold: {
    fontWeight: '600',
    color: '#000',
  },
  topheader: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },

  schoollogoimg: {height: 30, width: 30},
  logotextcontainer: {marginLeft: 20},
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  detailContainer_item: {
    flex: 1,
  },
  detailContainer_itemText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },

  detailContainer_itemActive: {
    borderBottomWidth: 4,
    borderBottomColor: '#2789FD',
  },
  detailContainer_itemTextActive: {
    color: '#2789FD',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    maxWidth: 300,
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  headContent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    maxWidth: 400,
    marginHorizontal: 2,
  },
  headContent_item: {
    borderRightWidth: 1,
    borderRightColor: 'green',
    paddingVertical: 10,
    flex: 1,
    paddingHorizontal: 1,
    justifyContent: 'center',
  },
  headtext: {
    textAlign: 'center',
  },
  // Personal Information
  personal: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  personal_item: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    borderBottomWidth: 1,
  },
  personal_subitem1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    fontSize: 20,
    color: 'green',
    marginVertical: 8,
    fontWeight: '600',
  },
  personal_subitem2: {
    paddingBottom: 5,
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  textinput: {
    backgroundColor: '#fff',
    height: 35,
  },
  text1: {
    fontSize: 17,
  },
  parentheadtext: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    marginVertical: 3,
  },
  personalButton_container: {
    // alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  personalButton: {
    width: 130,
  },
  menusecinput: {
    marginVertical: 5,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',

    justifyContent: 'space-around',
  },
  mobile: {
    paddingHorizontal: 10,
  },
  mobiletext: {
    paddingVertical: 5,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  menusectext: {
    fontSize: 18,
    // width: '100%',
  },
  selection_item1: {
    marginHorizontal: 10,
  },
});
