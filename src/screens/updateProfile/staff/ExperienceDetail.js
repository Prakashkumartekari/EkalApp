import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../../../../constants/globalStyle';
import {Button, TextInput} from 'react-native-paper';
import {NavigationString} from '../../../../constants/navigationName';
import {useDispatch} from 'react-redux';
import {updatingstaffDetail} from '../../../../redux/reducer/updateProfile/StaffSlice';
const ExperienceDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date());

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [datetext2, setDatetext2] = useState('From');
  const [datetext3, setDatetext3] = useState('To');

  const [state, setstate] = useState({
    employename: '',
    designation: '',
    workon: '',
    previoussalary: '',
  });
  const onChangeDate2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
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
    setDatetext2(fdate);
  };
  const onChangeDate3 = (event, selectedDate) => {
    const currentDate = selectedDate || date3;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
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
    console.log(fdate);
    setDatetext3(fdate);
  };
  const onpressNext = () => {
    const ExperienceDetailData = {
      from: datetext2,
      to: datetext3,
      employename: state.employename,
      designation: state.designation,
      workon: state.workon,
      prevsalary: state.previoussalary,
    };
    dispatch(
      updatingstaffDetail({name: 'experience', data: ExperienceDetailData}),
    );
    navigation.navigate(NavigationString.BankDetail);
  };
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
      <View style={{margin: 17}}>
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
            onChangeText={text => setstate({...state, employename: text})}
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
            onChangeText={text => setstate({...state, designation: text})}
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
            onChangeText={text => setstate({...state, workon: text})}
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
            label="Previous Salary"
            value={state.previoussalary}
            onChangeText={text => setstate({...state, previoussalary: text})}
            mode="outlined"
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            mode="contained"
            theme={{roundness: 30}}
            style={{elevation: 10, width: 100, marginTop: 20}}
            onPress={onpressNext}>
            Next
          </Button>
        </View>
      </View>
    </>
  );
};

export default ExperienceDetail;

const styles = StyleSheet.create({});
