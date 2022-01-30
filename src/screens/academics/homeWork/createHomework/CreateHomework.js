import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  TextInput,
} from 'react-native-paper';
import {Styles} from '../../studentAttendance/style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

import DateTimePicker from '@react-native-community/datetimepicker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';

import appTheme from '../../../../../constants/theme';
import {ImageUpload} from '../../../../../redux/reducer/CommonReducer';
import {getSubjects} from '../../../../../redux/reducer/academics/AttendanceReducer';
import {globalStyles} from '../../../../../constants/globalStyle';
const {SIZES, hp} = appTheme;
const CreateHomework = ({navigation, route}) => {
  const {Attendacedata} = route.params;
  const dispatch = useDispatch();
  const {subjectslist, dropdownModal} = useSelector(
    states => states.AttendanceState,
  );

  const {loader} = useSelector(states => states.CommonState);
  const [state, setState] = useState({
    title: '',
    discription: '',
    subjectData: [],
    selecsubject: false,
    subject: 'Subject',
    assignDate: 'Assign Date',
    lastDate: 'Last Date of Submission',
    selecterror: false,
    selectedImage: false,
  });
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [datetext1, setDatetext1] = useState('Assign Date');
  const [datetext2, setDatetext2] = useState('Last Date of Submission');

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
  const PressOnSubject = subject => {
    setState({...state, selecsubject: false, subject: subject});
  };
  const PickImage = async () => {
    const res = await launchImageLibrary();
    if (res.assets) {
      setState({...state, selectedImage: res.assets});
    }
  };
  const uploadImage = () => {
    if (state.title) {
      let datas = new FormData();
      if (state.selectedImage) {
        datas.append('file', {
          name: state.selectedImage[0].fileName,
          type: state.selectedImage[0].type,
          uri:
            Platform.OS === 'android'
              ? state.selectedImage[0].uri
              : state.selectedImage[0].replace('file://', ''),
        });
        dispatch(ImageUpload(datas));
      }
    } else {
      Alert.alert('Error', 'Homework Title required');
    }
  };
  const onSubmitPress = () => {
    if (!state.title) {
      Alert.alert('Error', 'Homework Title required');
    } else if (!state.subject) {
      Alert.alert('Error', 'Subject required');
    } else if (datetext1 === 'Assign Date') {
      Alert.alert('Error', 'Assigning Date is required');
    } else if (datetext2 === 'Last Date of Submission') {
      Alert.alert('Error', 'Last Date of Submission required');
    } else if (!state.discription) {
      Alert.alert('Error', 'Discription required');
    } else {
      let sendingData = {
        schoolDocId: Attendacedata.schoolDocId,
        classDocId: Attendacedata.classDocId,
        className: Attendacedata.class,
        stream: Attendacedata.stream,
        section: Attendacedata.section,
        medium: Attendacedata.medium,
        subject: state.subject,
        title: state.title,
        createdBy: {
          personDocId: '61b07db4dc70d90a2cc6dc79',
          personName: 'Staff 122',
        },
        lastDate: datetext2,
        description: state.discription,
        attachments: ['Hello.jpg', 'Bye.jpg'],
      };
    }
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
      // filterdropdownstream.map(item => {
      //   id = item.schoolDocId;
      //   classid = item.classDocId;
      // });
      setState({
        ...state,
        medium: 'Subject',
        class: 'Assign Date',
        stream: 'Last Date of Submission',
      });
      const Attendacedata = {
        schoolDocId: id,
        section: state.section,
        classDocId: classid,
      };
      navigation.navigate('HomeworkForm', {Attendacedata});
    }
  };

  useEffect(() => {
    setState({...state, subjectData: subjectslist});
  }, [subjectslist]);

  useEffect(() => {
    dispatch(getSubjects(Attendacedata.classDocId));
    dispatch(getSubjects(Attendacedata.schoolDocId));
  }, [dispatch]);
  return (
    <ScrollView>
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
      <View
        style={[
          Styles.root,
          {
            paddingVertical: 0,
            minHeight: hp('100%'),
            paddingHorizontal: SIZES.m7,
          },
        ]}>
        <View style={[Styles.attendance_container]}>
          <View
            style={[
              Styles.attendanceSelection_container,
              {marginVertical: SIZES.m3},
            ]}>
            <TouchableOpacity
              onPress={() =>
                setState({...state, selecsubject: !state.selecsubject})
              }>
              <View style={globalStyles.inputFieldContainer}>
                <View style={globalStyles.selectionFieldContainer}>
                  <Text style={globalStyles.selectionFieldText}>
                    {state.subject}
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
            {state.selecsubject && (
              <View style={globalStyles.selection_container}>
                {state.subjectData.list?.map((item, i) => (
                  <View key={i}>
                    <TouchableOpacity
                      style={[globalStyles.selectionItem]}
                      onPress={() => PressOnSubject(item)}>
                      <Text
                        style={[globalStyles.selection_Text, {color: '#000'}]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
            <View style={globalStyles.inputFieldContainer}>
              <TextInput
                style={globalStyles.inputField}
                outlineColor="#fff"
                value={state.firstName}
                onChangeText={text => setState({...state, title: text})}
                theme={{roundness: 10}}
                label="Homework Title"
                mode="outlined"
              />
            </View>
            <View style={globalStyles.inputFieldContainer}>
              <TextInput
                style={globalStyles.inputField}
                outlineColor="#fff"
                multiline
                numberOfLines={6}
                value={state.firstName}
                onChangeText={text => setState({...state, discription: text})}
                theme={{roundness: 10}}
                label="Description"
                mode="outlined"
              />
            </View>
            <TouchableOpacity onPress={setShow1}>
              <View style={globalStyles.inputFieldContainer}>
                <View style={globalStyles.selectionFieldContainer}>
                  <Text style={globalStyles.selectionFieldText}>
                    {datetext1}
                  </Text>
                  <Fontisto name="date" size={28} color="#000" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={setShow2}>
              <View style={globalStyles.inputFieldContainer}>
                <View style={globalStyles.selectionFieldContainer}>
                  <Text style={globalStyles.selectionFieldText}>
                    {datetext2}
                  </Text>
                  <Fontisto name="date" size={28} color="#000" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={PickImage}>
              <View
                style={[
                  globalStyles.inputFieldContainer,
                  {borderStyle: 'dotted', borderWidth: 1.5},
                ]}>
                <View style={globalStyles.selectionFieldContainer}>
                  <Text
                    style={{
                      backgroundColor: '#D3CBCB8A',
                      color: '#000',
                      paddingHorizontal: SIZES.m13,
                      paddingVertical: SIZES.m4,
                    }}>
                    Choose File
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text style={{color: 'red', fontSize: SIZES.h5}}>
              file size is greater than 2MB. please upload file below 2MB.
            </Text>
            <TouchableOpacity onPress={uploadImage}>
              <View
                style={[
                  globalStyles.inputFieldContainer,
                  {borderStyle: 'solid', borderWidth: 1.5, marginTop: SIZES.m6},
                ]}>
                <View
                  style={[
                    globalStyles.selectionFieldContainer,
                    {justifyContent: 'center'},
                  ]}>
                  {loader ? (
                    <View style={{flexDirection: 'row'}}>
                      <ActivityIndicator />
                      <Text
                        style={{
                          color: '#000',
                          fontSize: SIZES.h4,
                        }}>
                        Uploading...
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={{
                        color: '#000',
                        fontSize: SIZES.h4,
                      }}>
                      Click to Upload
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            color="#0080FF"
            style={{
              elevation: 20,
              width: '100%',
              // height: SIZES.m25,
              justifyContent: 'center',
              marginTop: SIZES.m4,
            }}
            labelStyle={{fontSize: SIZES.h4}}
            theme={{roundness: 30}}
            onPress={Create}>
            Submit
          </Button>
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
                <Text style={{marginTop: 10, fontSize: 19}}>
                  Fetching subjects...
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
    </ScrollView>
  );
};

export default CreateHomework;
