import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  TextInput,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ImagePath from '../../../../constants/ImagePath';
import {
  closeDialog,
  Editattendance,
  Gettodayattendance,
  updateAttendanceData,
} from '../../../../redux/reducer/academics/AttendanceReducer';
import {NavigationString} from '../../../../constants/navigationName';

const DetailAttendace = ({route, navigation}) => {
  const {Attendacedata, attendance2} = route.params;

  const dispatch = useDispatch();
  const {
    todayattendance,
    todayattendanceError,
    editAttendance,
    editAttendanceError,
    dropdownModal,
  } = useSelector(state => state.AttendanceState);

  const [state, setState] = useState({
    allpresent: false,
    allabsent: false,
    present: [],
    absent: [],
    attendanceData: [],
    remark: false,
    remarksText: '',
    onlycondition: false,
  });
  const allPresent = () => {
    if (state.attendanceData.length > 0) {
      if (state.allpresent) {
        let updatedattendace = state.attendanceData.map(item => {
          return {...item, attendance: null};
        });
        setState({
          ...state,
          allabsent: false,
          allpresent: false,
          attendanceData: updatedattendace,
        });
      } else {
        let updatedattendace = state.attendanceData.map(item => {
          return {...item, attendance: 'Present'};
        });
        setState({
          ...state,
          allpresent: true,
          allabsent: false,
          attendanceData: updatedattendace,
        });
      }
    }
  };
  const allabsent = () => {
    if (state.attendanceData.length > 0) {
      if (state.allabsent) {
        let updatedattendace = state.attendanceData.map(item => {
          return {...item, attendance: null};
        });
        setState({
          ...state,
          allabsent: false,
          allpresent: false,
          attendanceData: updatedattendace,
        });
      } else {
        let updatedattendace = state.attendanceData.map(item => {
          return {...item, attendance: 'Absent'};
        });
        setState({
          ...state,
          allabsent: true,
          allpresent: false,
          attendanceData: updatedattendace,
        });
      }
    }
  };
  const presntStudent = res => {
    let filterarray = state.attendanceData.filter(item => item.id === res);
    let updatedattendace = filterarray.map(item => {
      if (item.attendance === 'Present') {
        return {...item, attendance: null};
      } else {
        return {...item, attendance: 'Present'};
      }
    });
    let filterarray2 = state.attendanceData.filter(item => item.id !== res);
    let indexed = state.attendanceData.findIndex(({id}) => id === res);
    filterarray2.splice(indexed, 0, updatedattendace[0]);
    setState({
      ...state,
      attendanceData: filterarray2,
    });
  };
  const absentStudent = res => {
    let filterarray = state.attendanceData.filter(item => item.id === res);
    let updatedattendace = filterarray.map(item => {
      if (item.attendance === 'Absent') {
        return {...item, attendance: null};
      } else {
        return {...item, attendance: 'Absent'};
      }
    });
    let filterarray2 = state.attendanceData.filter(item => item.id !== res);
    let indexed = state.attendanceData.findIndex(({id}) => id === res);

    filterarray2.splice(indexed, 0, updatedattendace[0]);

    setState({
      ...state,
      attendanceData: filterarray2,
    });
  };
  const remarkStudent = id => {
    state.attendanceData.map((item, index) => {
      if (item.id === id) {
        // return state.attendanceData[index].remark;
        // return item.remark;
        if (state.attendanceData[index].remark === null) {
          setState({...state, remarksText: '', remark: id});
        } else {
          setState({
            ...state,
            remarksText: state.attendanceData[index].remark,
            remark: id,
          });
        }
      }
    });
  };
  const onRemarksPost = () => {
    let filterarray = state.attendanceData.filter(
      item => item.id === state.remark,
    );
    let updatedattendace = filterarray.map(item => {
      if (state.remarksText === '') {
        return {...item, remark: null};
      } else {
        return {...item, remark: state.remarksText};
      }
    });
    let filterarray2 = state.attendanceData.filter(
      item => item.id !== state.remark,
    );
    let indexed = state.attendanceData.findIndex(({id}) => id === state.remark);

    filterarray2.splice(indexed, 0, updatedattendace[0]);

    setState({
      ...state,
      attendanceData: filterarray2,
      remark: '',
    });
  };
  const handleSubmit = () => {
    dispatch(updateAttendanceData(state.attendanceData));
    navigation.navigate(NavigationString.ViewAttendance);
  };

  useEffect(() => {
    dispatch(Gettodayattendance(Attendacedata));
  }, [dispatch, Attendacedata]);
  useEffect(() => {
    if (Boolean(attendance2)) {
      setState({...state, attendanceData: attendance2});
    }
  }, [attendance2]);
  useEffect(() => {
    if (todayattendance) {
      setState({...state, attendanceData: todayattendance?.list});
    }
  }, [todayattendance]);
  const renderItem = ({item}) => (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: '3%',
          paddingVertical: '4%',
          marginHorizontal: '4%',
          marginVertical: '2%',
          elevation: 5,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={ImagePath.userjpg}
              style={{height: 100, width: 100, borderRadius: 200}}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#000'}}>{item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>Reg Number:</Text>
              <Text style={{marginLeft: '15%', fontSize: 18, color: '#000'}}>
                {item.registrationNumber}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '4%',
          }}>
          <Button
            mode="contained"
            color={item.attendance === 'Present' ? 'green' : '#fff'}
            style={{marginRight: '2%', elevation: 10}}
            onPress={() => presntStudent(item.id)}>
            Present
          </Button>
          <Button
            mode="contained"
            color={item.attendance === 'Absent' ? 'red' : '#fff'}
            style={{marginRight: '2%', elevation: 10}}
            onPress={() => absentStudent(item.id)}>
            Absent
          </Button>
          <Button
            mode="contained"
            color={item.remark ? '#FFA500' : '#fff'}
            style={{elevation: 10}}
            onPress={() => remarkStudent(item.id)}>
            Remark
          </Button>
        </View>
      </View>
      {item.id === state.attendanceData[state.attendanceData.length - 1].id && (
        <View
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <Button mode="contained" color="green" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </>
  );
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          marginVertical: '4%',
        }}>
        <Button
          mode="contained"
          color={state.allpresent ? 'green' : '#fff'}
          style={{elevation: 10, marginRight: '2%'}}
          onPress={allPresent}>
          All Present
        </Button>
        <Button
          mode="contained"
          color={state.allabsent ? 'red' : '#fff'}
          style={{elevation: 10}}
          onPress={allabsent}>
          All Absent
        </Button>
      </View>
      {state.attendanceData?.length > 0 ? (
        <FlatList
          data={state.attendanceData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View>
          <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20}}>
            Attendace not found
          </Text>
        </View>
      )}
      <Portal>
        <Dialog visible={state.remark}>
          <Dialog.Content>
            <Text style={{color: '#000', fontSize: 18}}>Remarks:</Text>
            <TextInput
              style={{backgroundColor: '#fff'}}
              multiline
              numberOfLines={7}
              value={state.remarksText}
              onChangeText={text => setState({...state, remarksText: text})}
              mode="outlined"
              placeholder="Please Write Remarks Here"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Button
                mode="contained"
                onPress={() => setState({...state, remark: false})}>
                cancel
              </Button>
              <Button mode="contained" onPress={onRemarksPost}>
                Post
              </Button>
            </View>
          </Dialog.Actions>
        </Dialog>
        <Dialog visible={dropdownModal}>
          <Dialog.Content style={{backgroundColor: 'none'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <ActivityIndicator size={'large'} />
              <Text style={{marginTop: 10, fontSize: 16}}>
                Fetching Attendance...
              </Text>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DetailAttendace;
