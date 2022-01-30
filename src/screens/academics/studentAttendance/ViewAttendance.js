import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Portal, Dialog, ActivityIndicator} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationString} from '../../../../constants/navigationName';
import {Editattendance} from '../../../../redux/reducer/academics/AttendanceReducer';
const ViewAttendance = ({navigation}) => {
  const dispatch = useDispatch();
  const {attendance, editAttendance, editAttendanceError} = useSelector(
    state => state.AttendanceState,
  );
  const [state, setState] = useState({
    allpresent: false,
    allabsent: false,
    present: [],
    absent: [],
    class: '',
    modal: false,
  });
  const handleSubmit = () => {
    dispatch(Editattendance(attendance));
    setState({...state, modal: true});
  };
  const ModalClose = () => {
    if (editAttendance) {
      setState({...state, modal: false});
      navigation.navigate(NavigationString.Attendace);
    } else if (editAttendanceError) {
      setState({...state, modal: false});
    }
  };
  useEffect(() => {
    let present = attendance.filter(item => item.attendance === 'Present');
    let absent = attendance.filter(item => item.attendance === 'Absent');

    setState({...state, present: present, absent: absent});
  }, [attendance]);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: '30%',
          paddingVertical: '5%',
          paddingHorizontal: '5%',
          marginHorizontal: '5%',
          elevation: 3,
          borderRadius: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Class Name:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {attendance[0].className}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Stream:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {attendance[0].stream}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Section:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {attendance[0].section}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Total Students:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {attendance?.length}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Total Present:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {state.present.length}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={{fontSize: 18, color: 'grey'}}>Total Absent:</Text>
          <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
            {state.absent.length}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
          <Button
            onPress={handleSubmit}
            mode="contained"
            color="green"
            style={{flex: 1, marginRight: '3%'}}>
            Submit
          </Button>
          <Button
            mode="contained"
            color="red"
            style={{flex: 1}}
            onPress={() => navigation.goBack()}>
            Edit
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={state.modal}>
          <Dialog.Content>
            {!editAttendance && !editAttendanceError ? (
              <View>
                <ActivityIndicator size="large" />
                <Text style={{textAlign: 'center', marginTop: 20}}>
                  Submitting....
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  color: 'green',
                  textAlign: 'center',
                  fontSize: 18,
                  marginVertical: 10,
                }}>
                Attendace Submited Successfully !!
              </Text>
            )}
            {editAttendanceError && <Text>{editAttendanceError}</Text>}
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              mode="contained"
              onPress={ModalClose}
              style={{
                paddingHorizontal: 30,
                elevation: 10,
                marginBottom: 10,
                marginRight: 10,
              }}
              theme={{roundness: 20}}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ViewAttendance;
