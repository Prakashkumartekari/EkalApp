import React, {useEffect} from 'react';
import {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {ActivityIndicator, Button, Dialog, Portal} from 'react-native-paper';
import {Styles} from '../../studentAttendance/style';
import Entypo from 'react-native-vector-icons/Entypo';

import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import appTheme from '../../../../../constants/theme';
import {getDropDown} from '../../../../../redux/reducer/academics/AttendanceReducer';
import {NavigationString} from '../../../../../constants/navigationName';
import {globalStyles} from '../../../../../constants/globalStyle';

const {SIZES, wp} = appTheme;
const PostedSelect = ({navigation}) => {
  const dispatch = useDispatch();
  const {SchoolId, dropdown, dropdownModal} = useSelector(
    state => state.AttendanceState,
  );

  const [selectedmedium, setselectedmedium] = useState([]);
  const [filterdropdownmedium, setFilterdropdownmedium] = useState([]);
  const [filterdropdownclass, setFilterdropdownclass] = useState([]);
  const [filterdropdownstream, setFilterdropdownstream] = useState([]);

  const [state, setState] = useState({
    selectmedium: false,
    selectclass: false,
    selectstream: false,
    selectsection: false,
    remark: false,
    medium: 'Medium',
    class: 'Class',
    stream: 'Stream',
    section: 'Section',
    eng: false,
    hnd: false,
    remarktext: '',
    selecterror: false,
    alldata: [],
  });

  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [datetext1, setDatetext1] = useState('From');
  const [datetext2, setDatetext2] = useState('To');

  const onChangeDate1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
    let tempdate = new Date(currentDate);

    let fdate =
      tempdate.getDate() +
      '/' +
      (tempdate.getMonth() + 1) +
      '/' +
      tempdate.getFullYear();
    setDatetext1(fdate);
  };
  const onChangeDate2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
    let tempdate = new Date(currentDate);

    let fdate =
      tempdate.getDate() +
      '/' +
      (tempdate.getMonth() + 1) +
      '/' +
      tempdate.getFullYear();
    setDatetext2(fdate);
  };

  const mediumselect = () => {
    const mediumarray = dropdown?.list.filter(item => item.medium);
    let resdata = [];
    mediumarray?.map(item => {
      if (!resdata.includes(item.medium)) {
        resdata.push(item.medium);
      }
    });
    setselectedmedium(resdata);
    setState({...state, selectmedium: !state.selectmedium});
  };

  const pressmedium = smed => {
    setState({...state, medium: smed, selectmedium: false});
    const filterDropdowndata = dropdown.list.filter(
      item => item.medium === smed,
    );
    setFilterdropdownmedium(filterDropdowndata);
  };

  const pressClass = sclass => {
    setState({...state, class: sclass.className, selectclass: false});
    const filterdropdownClass = filterdropdownmedium.filter(
      item => item.className === sclass.className,
    );
    setFilterdropdownclass(filterdropdownClass);
  };
  const pressStream = sStream => {
    setState({...state, selectstream: false, stream: sStream.stream});
    const filteredropdownstream = filterdropdownclass.filter(
      item => item.stream === sStream.stream,
    );

    setFilterdropdownstream(filteredropdownstream);
  };

  const Create = () => {
    if (state.medium === 'Medium') {
      setState({...state, selecterror: 'Select Medium'});
    } else if (state.class === 'Class') {
      setState({...state, selecterror: 'Select Class'});
    } else if (state.stream === 'Stream') {
      setState({...state, selecterror: 'Select Stream'});
    } else if (state.section === 'Section') {
      setState({...state, selecterror: 'Select Section'});
    } else if (!state.selecterror) {
      let id;
      let classid;
      filterdropdownstream.map(item => {
        id = item.schoolDocId;
        classid = item.classDocId;
      });
      setState({
        ...state,
        medium: 'Medium',
        stream: 'Stream',
        class: 'Class',
        section: 'Section',
      });
      const Attendacedata = {
        schoolDocId: id,
        section: state.section,
        classDocId: classid,
      };
      navigation.navigate(NavigationString.PostedHomework, {Attendacedata});
    }
  };

  useEffect(() => {
    if (SchoolId) {
      !SchoolId.list[0].schoolDocId
        ? dispatch(getDropDown(SchoolId.list[0].id))
        : dispatch(getDropDown(SchoolId.list[0].schoolDocId));
    }
  }, [dispatch, SchoolId]);
  return (
    <View style={Styles.root}>
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode="date"
          style={{backgroundColor: 'blue'}}
          minimumDate={new Date()}
          display="calendar"
          onChange={onChangeDate1}
        />
      )}
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode="date"
          style={{backgroundColor: 'blue'}}
          minimumDate={new Date()}
          display="calendar"
          onChange={onChangeDate2}
        />
      )}
      <View style={Styles.attendance_container}>
        <View style={Styles.attendanceSelection_container}>
          <TouchableOpacity onPress={mediumselect}>
            <View style={globalStyles.inputFieldContainer}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>
                  {state.medium}
                </Text>
                <Entypo
                  name={
                    state.selectmedium
                      ? 'chevron-small-up'
                      : 'chevron-small-down'
                  }
                  size={35}
                />
              </View>
            </View>
          </TouchableOpacity>
          {state.selectmedium && (
            <View style={globalStyles.selection_container}>
              {selectedmedium.map((item, i) => (
                <View key={item}>
                  <TouchableOpacity
                    style={[globalStyles.selectionItem]}
                    onPress={() => pressmedium(item)}>
                    <Text
                      style={[globalStyles.selection_Text, {color: '#000'}]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity
            onPress={() =>
              setState({...state, selectclass: !state.selectclass})
            }>
            <View style={globalStyles.inputFieldContainer}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>
                  {state.class}
                </Text>
                <Entypo
                  name={
                    state.selectclass
                      ? 'chevron-small-up'
                      : 'chevron-small-down'
                  }
                  size={35}
                />
              </View>
            </View>
          </TouchableOpacity>
          {state.selectclass && (
            <View style={globalStyles.selection_container}>
              <>
                {filterdropdownmedium.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[globalStyles.selectionItem]}
                    onPress={() => pressClass(item)}>
                    <Text
                      style={[globalStyles.selection_Text, {color: '#000'}]}>
                      {item.className}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            </View>
          )}
          <TouchableOpacity
            onPress={() =>
              setState({...state, selectstream: !state.selectstream})
            }>
            <View style={globalStyles.inputFieldContainer}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>
                  {state.stream}
                </Text>
                <Entypo
                  name={
                    state.selectstream
                      ? 'chevron-small-up'
                      : 'chevron-small-down'
                  }
                  size={35}
                />
              </View>
            </View>
          </TouchableOpacity>
          {state.selectstream && (
            <View style={globalStyles.selection_container}>
              <>
                {filterdropdownclass.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[globalStyles.selectionItem]}
                    onPress={() => pressStream(item)}>
                    <Text
                      style={[globalStyles.selection_Text, {color: '#000'}]}>
                      {item.stream}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            </View>
          )}
          <TouchableOpacity
            onPress={() =>
              setState({...state, selectsection: !state.selectsection})
            }>
            <View style={globalStyles.inputFieldContainer}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>
                  {state.section}
                </Text>
                <Entypo
                  name={
                    state.selectsection
                      ? 'chevron-small-up'
                      : 'chevron-small-down'
                  }
                  size={35}
                />
              </View>
            </View>
          </TouchableOpacity>
          {state.selectsection && (
            <View style={globalStyles.selection_container}>
              {filterdropdownstream.map(item =>
                item.sections.map((res, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[globalStyles.selectionItem]}
                    onPress={() =>
                      setState({
                        ...state,
                        selectsection: !state.selectsection,
                        section: res,
                      })
                    }>
                    <Text
                      style={[globalStyles.selection_Text, {color: '#000'}]}>
                      {res}
                    </Text>
                  </TouchableOpacity>
                )),
              )}
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity onPress={setShow1}>
            <View
              style={[
                globalStyles.inputFieldContainer,
                {width: wp('40%'), marginTop: 0},
              ]}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>{datetext1}</Text>
                <Fontisto name="date" size={28} color="#000" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={setShow2}>
            <View
              style={[
                globalStyles.inputFieldContainer,
                {width: wp('40%'), marginTop: 0},
              ]}>
              <View style={globalStyles.selectionFieldContainer}>
                <Text style={globalStyles.selectionFieldText}>{datetext2}</Text>
                <Fontisto name="date" size={28} color="#000" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.viewandtakeattendance_container}>
          <View>
            <Button
              mode="contained"
              color="#0080FF"
              style={{elevation: 20, width: 140, marginTop: SIZES.m10}}
              theme={{roundness: 30}}
              labelStyle={{fontSize: SIZES.h5}}
              onPress={Create}>
              View
            </Button>
          </View>
        </View>
      </View>
      <Portal>
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
                Fetching data...
              </Text>
            </View>
          </Dialog.Content>
        </Dialog>
        <Dialog visible={state.selecterror}>
          <Dialog.Content style={{backgroundColor: 'none'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text style={{marginTop: 10, fontSize: 18, color: 'red'}}>
                {state.selecterror}
              </Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              mode="contained"
              theme={{roundness: 20}}
              onPress={() => setState({...state, selecterror: false})}
              style={{
                paddingHorizontal: 15,
                elevation: 20,
                marginBottom: 10,
                marginHorizontal: 10,
              }}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default PostedSelect;
