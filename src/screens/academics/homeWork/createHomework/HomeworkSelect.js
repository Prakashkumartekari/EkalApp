import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {ActivityIndicator, Button, Dialog, Portal} from 'react-native-paper';
import {Styles} from '../../studentAttendance/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationString} from '../../../../../constants/navigationName';
import {getDropDown} from '../../../../../redux/reducer/academics/AttendanceReducer';
import {globalStyles} from '../../../../../constants/globalStyle';

const HomeworkSelect = ({navigation}) => {
  const dispatch = useDispatch();
  const {SchoolId, dropdown, dropdownModal} = useSelector(
    state => state.AttendanceState,
  );
  const dt = new Date();
  let day = dt.getDate();
  let month = dt.getMonth();
  let year = dt.getFullYear();
  const [selectedmedium, setselectedmedium] = useState([]);
  const [filterdropdownmedium, setFilterdropdownmedium] = useState([]);
  const [filterdropdownclass, setFilterdropdownclass] = useState([]);
  const [filterdropdownstream, setFilterdropdownstream] = useState([]);

  const [state, setState] = useState({
    selectmedium: false,
    selectclass: false,
    selectstream: false,
    selectsection: false,
    medium: 'Medium',
    class: 'Class',
    stream: 'Stream',
    section: 'Section',
    selecterror: false,
    alldata: [],
  });

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [datetext, setDatetext] = useState(
    ` Today, ${day}-${month + 1}-${year}`,
  );

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempdate = new Date(currentDate);

    let fdate = ` ${
      tempdate.getDate() === day ? 'Today, ' : ''
    }${tempdate.getDate()}-${
      tempdate.getMonth() + 1
    }-${tempdate.getFullYear()}`;
    setDatetext(fdate);
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

      const Attendacedata = {
        schoolDocId: id,
        classDocId: classid,
        medium: state.medium,
        class: state.class,
        stream: state.stream,
        section: state.section,
      };
      navigation.navigate(NavigationString.CreateHomework, {Attendacedata});
      setState({
        ...state,
        medium: 'Medium',
        stream: 'Stream',
        class: 'Class',
        section: 'Section',
      });
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
      <View style={Styles.attendance_container}>
        <Text
          style={Styles.attendanceCalendar_text}
          onPress={() => setShow(true)}>
          <AntDesign name="calendar" size={20} />
          {datetext}
        </Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            maximumDate={new Date()}
            display="calendar"
            onChange={onChangeDate}
          />
        )}

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

        <View style={Styles.viewandtakeattendance_container}>
          <View>
            <Button
              mode="contained"
              color="#0080FF"
              style={{elevation: 20}}
              theme={{roundness: 30}}
              onPress={Create}
              labelStyle={{fontSize: 17}}>
              Create
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

export default HomeworkSelect;
