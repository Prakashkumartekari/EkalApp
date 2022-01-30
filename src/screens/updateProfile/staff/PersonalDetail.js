import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyle';
import {Styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';
import {NavigationString} from '../../../../constants/navigationName';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {updatingstaffDetail} from '../../../../redux/reducer/updateProfile/StaffSlice';
import {ImageUpload} from '../../../../redux/reducer/CommonReducer';

const PersonalDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const {imageuploadmessage, loader} = useSelector(
    states => states.CommonState,
  );
  const {staffprofile} = useSelector(states => states.auth);
  const [state, setstate] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileno: '',
    alternateno: '',
    emailid: '',
    gender: '',
    marital: '',
    maritalselect: false,
    genderselect: false,
    pannumber: '',
    errors: {},
    imagerurl: '',
    imagelarge: false,
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [datetext, setDatetext] = useState('Date of Birth');
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempdate = new Date(currentDate);
    let month;
    if (tempdate.getMonth() < 9 && tempdate.getMonth() > 0) {
      month = `${0}${tempdate.getMonth() + 1}`;
    } else if (tempdate.getMonth() === 0) {
      month = `${0}${tempdate.getMonth() + 1}`;
    } else {
      month = tempdate.getMonth() + 1;
    }
    let day;
    if (tempdate.getDate() < 10) {
      day = `${0}${tempdate.getDate()}`;
    } else {
      day = tempdate.getDate();
    }
    let fdate = tempdate.getFullYear() + '-' + month + '-' + day;
    setDatetext(fdate);
  };
  const OnpressUpload = async () => {
    const res = await launchImageLibrary();
    if (res.assets[0].fileSize > 200000) {
      setstate({...state, imagelarge: true});
    } else {
      setstate({...state, imagelarge: false});
      let datas = new FormData();
      if (res.assets) {
        datas.append('file', {
          name: res.assets[0].fileName,
          type: res.assets[0].type,
          uri:
            Platform.OS === 'android'
              ? res.assets[0].uri
              : res.assets[0].replace('file://', ''),
        });
        dispatch(ImageUpload(datas));
      }
    }
  };
  const onpressNext = () => {
    let error = {};
    let regex = /^[0-9]{10}$/;
    if (!state.firstName.trim()) {
      error.firstName = 'Firstname is required';
    }
    if (!state.pannumber.trim()) {
      error.pannumber = 'PAN Number is required';
    }
    if (!state.gender) {
      error.gender = 'Gender is required';
    }
    if (datetext === 'Date of Birth') {
      error.dateofbirth = 'Date of Birth required';
    }
    if (!state.marital.trim()) {
      error.marital = 'Marital Status is required';
    }
    if (!state.imagerurl.trim()) {
      error.imagerurl = 'Profile image required';
    }
    if (
      (state.alternateno.length < 10 && state.alternateno.length > 0) ||
      state.alternateno.length > 11
    ) {
      error.alternateno = 'Alternate no Must be 10 digits';
    } else if (!regex.test(state.alternateno) && state.alternateno.length > 0) {
      error.alternateno = 'Mobile no Should be Numbers';
    } else if (!regex.test(state.alternateno) && state.alternateno.length > 0) {
      error.alternateno = 'Mobile no Should be Numbers';
    }
    setstate({...state, errors: error});

    if (Object.keys(error).length === 0) {
      const personalDetailData = {
        imagerurl: imageuploadmessage.message,
        dob: datetext,
        firstName: state.firstName,
        middleName: state.middleName,
        lastName: state.lastName,
        mobileno: state.mobileno,
        alternateno: state.alternateno,
        emailid: state.emailid,
        gender: state.gender,
        marital: state.marital,
        pannumber: state.pannumber,
      };
      dispatch(
        updatingstaffDetail({name: 'personal', data: personalDetailData}),
      );
      navigation.navigate(NavigationString.ParenDetail);
    }
  };
  useEffect(() => {
    if (staffprofile?.list[0]?.email) {
      setstate({
        ...state,
        emailid: staffprofile?.list[0]?.email,
        mobileno: staffprofile?.list[0]?.mobileNumber,
        firstName: staffprofile?.list[0]?.firstName,
        middleName: staffprofile?.list[0]?.middleName,
        lastName: staffprofile?.list[0]?.lastName,
        gender: staffprofile?.list[0]?.gender,
      });
      if (staffprofile?.list[0]?.dob) {
        setDatetext(staffprofile?.list[0]?.dob);
      }
    }
  }, [staffprofile]);
  useEffect(() => {
    if (imageuploadmessage) {
      setstate({...state, imagerurl: imageuploadmessage.message});
    }
  }, [imageuploadmessage]);
  return (
    <ScrollView>
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
      <View style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <View
            style={{
              flex: 1.5,
              justifyContent: 'flex-end',
            }}>
            <Button
              mode="contained"
              loading={loader}
              onPress={OnpressUpload}
              labelStyle={{textTransform: 'capitalize'}}>
              {loader ? 'uploading....' : 'Upload Profile Pic'}
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            {!imageuploadmessage ? (
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderWidth: 2,
                  borderStyle: 'solid',
                }}></View>
            ) : (
              <>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderWidth: 2,
                    borderStyle: 'solid',
                    padding: 2,
                  }}>
                  <Image
                    source={{uri: imageuploadmessage.message}}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </View>
        {state.imagelarge && (
          <View>
            <Text style={{color: 'red', fontSize: 18}}>
              Image size greater than 2MB
            </Text>
          </View>
        )}
        {state.errors.imagerurl && (
          <Text style={Styles.red}>{state.errors.imagerurl}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.firstName}
            onChangeText={text => setstate({...state, firstName: text})}
            theme={{roundness: 10}}
            label="First Name"
            mode="outlined"
          />
        </View>
        {state.errors.firstName && (
          <Text style={Styles.red}>{state.errors.firstName}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.middleName}
            onChangeText={text => setstate({...state, middleName: text})}
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
            onChangeText={text => setstate({...state, lastName: text})}
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
            onChangeText={text => setstate({...state, alternateno: text})}
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Alternate Number"
            keyboardType="number-pad"
            mode="outlined"
          />
        </View>
        {state.errors.alternateno && (
          <Text style={Styles.red}>{state.errors.alternateno}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            value={state.emailid}
            editable={false}
            style={globalStyles.inputField}
            outlineColor="#fff"
            theme={{roundness: 10}}
            label="Email id"
            mode="outlined"
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            setstate({...state, maritalselect: !state.maritalselect})
          }>
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
        {state.errors.marital && (
          <Text style={Styles.red}>{state.errors.marital}</Text>
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
                setstate({...state, marital: 'Married', maritalselect: false})
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
                setstate({...state, marital: 'UnMarried', maritalselect: false})
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
        <TouchableOpacity
          onPress={() =>
            setstate({...state, genderselect: !state.genderselect})
          }>
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
        {state.errors.gender && (
          <Text style={Styles.red}>{state.errors.gender}</Text>
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
                setstate({...state, gender: 'Male', genderselect: false})
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
                setstate({...state, gender: 'FeMale', genderselect: false})
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
                setstate({...state, gender: 'Other', genderselect: false})
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
        {state.errors.dateofbirth && (
          <Text style={globalStyles.red}>{state.errors.dateofbirth}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.pannumber}
            onChangeText={text => setstate({...state, pannumber: text})}
            theme={{roundness: 10}}
            label="Pan Number"
            mode="outlined"
          />
        </View>
        {state.errors.pannumber && (
          <Text style={globalStyles.red}>{state.errors.pannumber}</Text>
        )}
      </View>

      <View style={{alignItems: 'flex-end', paddingRight: 20}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, paddingHorizontal: '2%', marginBottom: '7%'}}
          onPress={onpressNext}>
          Next
        </Button>
      </View>
    </ScrollView>
  );
};

export default PersonalDetail;

const styles = StyleSheet.create({});
