import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Buttons from '../../../components/buttons/Buttons';
import VisitorCard from '../../../components/visitorCrad/VisitorCard';
import appTheme from '../../../../constants/theme';
import styles from './styles';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  getVisitorLog,
  visitorControlFun,
  getClassDropdown,
  getAllDepartment,
  putExit,
  getStaffByEmail,
  getStaffById,
} from '../../../../redux/reducer/reception/visitorControl';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {getSchoolId} from '../../../../redux/reducer/academics/AttendanceReducer';

const {COLORS, SIZES, hp, wp, ALIGN} = appTheme;

const VisitorControl = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [mobile, setMobile] = useState();
  const [from, setFrom] = useState('');
  const [person, setPerson] = useState('');
  const [meet, setMeet] = useState('');
  const [dpt, setDpt] = useState('');
  const [admin, setAdmin] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [time, setTime] = useState('');
  const [out, setOut] = useState('');
  const [purpose, setPurpose] = useState('');
  const [selectDptArray, setSelectDptArray] = useState([]);
  const [className, setClassName] = useState([]);
  const [classDocId, setClassDocId] = useState('');
  const [schoolDocId, setSchoolDocId] = useState('');

  const dispatch = useDispatch();
  const {getVisitor, visitor, getClass, getAllDpt, msg, getStaff, getStaffID} =
    useSelector(state => state.visitorControlList);
  const {SchoolId} = useSelector(state => state.AttendanceState);
  const {loginDetail} = useSelector(state => state.auth);
  // console.log('===================================>  ', className);
  // console.log('===================================>  ', classDocId);
  // console.log('===================================>  ', getAllDpt);
  // console.log('===================================>  ', getStaffID);
  // console.log('===================================>  ', loginDetail.roles);
  console.log('===================================>  ', schoolDocId);

  useEffect(() => {
    setSchoolDocId(SchoolId?.list[0]?.id);
  }, [SchoolId]);

  let allDpt = [];
  useEffect(() => {
    dispatch(getVisitorLog());
    dispatch(getAllDepartment(schoolDocId)); // get all department
    dispatch(getStaffByEmail());
    dispatch(getClassDropdown(schoolDocId));
    dispatch(getStaffById());
    dispatch(getSchoolId(loginDetail.username));
  }, []);

  // useEffect(() => {
  //   if (getStaff && getStaff.length > 0) {
  //     setSchoolDocId(getStaff.list[0].schoolDocId);
  //     // console.log('===================================>  ', schoolDocId);
  //   }
  //   if (getAllDpt.list.length > 0) {
  //     getAllDpt.list.map((items) => {
  //       allDpt.push(items.departmentName);
  //       // console.log('===================================>  ', allDpt);
  //       setSelectDptArray(allDpt);
  //     })
  //   }
  //   if (getClass.list.length > 0) {
  //     getClass.list.map((i) => {
  //       setClassDocId(i.classDocId);
  //       setClassName(i.className)
  //       // console.log('===================================>  ', i.classDocId);
  //     })
  //   }
  // }, [])

  const modelVisible = () => {
    setModalVisible(!isModalVisible);
  };

  const formdata = {
      text,
      mobile,
      from,
      person,
      meet,
      dpt,
      admin,
      date,
      note,
      purpose,
      time,
      out,
      schoolDocId,
    },
    submitFun = () => {
      dispatch(visitorControlFun(formdata));
    };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Director', value: 'Director'},
    {label: 'Staff', value: 'Staff'},
    {label: 'Student', value: 'Student'},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Director', value: 'Director'},
    {label: 'Staff', value: 'Staff'},
    {label: 'Student', value: 'Student'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Director', value: 'Director'},
    {label: 'Staff', value: 'Staff'},
    {label: 'Student', value: 'Student'},
  ]);

  return (
    <ScrollView>
      <View style={styles.mainWrap}>
        <Buttons
          alignSelf={ALIGN.align}
          btnMedium={true}
          label={'Add New Visitor'}
          onPress={() => modelVisible()}
          // onPress={() => navigation.navigate('Add New Visitor')}
          btnMediumBGColor={COLORS.dashcard17}
          txtColor={COLORS.black}
        />
        <VisitorCard card={true} label={'Date'} labelTwo={'01-11-2021'} />
        <VisitorCard
          card={true}
          label={'Visitor Name'}
          labelTwo={'Harmanapreet'}
        />
        <VisitorCard card={true} label={'Contact No.'} labelTwo={'123456789'} />
        <VisitorCard
          card={true}
          label={'From (Address)'}
          labelTwo={'Sultanpur, UP'}
        />
        <VisitorCard
          card={true}
          label={'Meet to)'}
          labelTwo={'Chandan (Student)'}
        />
        <VisitorCard
          card={true}
          label={'Meeting Purpose'}
          labelTwo={'URgent Work'}
        />
        <View style={styles.btnViewWrap}>
          <Buttons
            btnSmall={true}
            label={'In Time'}
            txtColor={COLORS.black}
            BGColor={COLORS.white}
            BDColor={COLORS.black}
            onPress={() => console.log('In Time')}
          />
          <Buttons
            btnSmall={true}
            label={'Out Time'}
            txtColor={COLORS.white}
            BGColor={COLORS.dashcard18}
            BDColor={COLORS.dashcard18}
            onPress={() => console.log('Out Time')}
          />
        </View>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.innerView}>
              <TouchableOpacity
                style={styles.cross}
                onPress={() => modelVisible()}>
                <Entypo
                  style={styles.cross}
                  name="cross"
                  size={24}
                  color={COLORS.dashcard18}
                />
              </TouchableOpacity>
              <View style={styles.title}>
                <Text style={styles.txtTitleName}>Add New Visitor</Text>
              </View>
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'Visitors Name'}
                  InputField={true}
                  onChangeText={text => setText(text)}
                  placeholder={'Ramaswami'}
                  defaultValue={text}
                  height={hp('6%')}
                />
              </View>
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'Mobile No'}
                  InputField={true}
                  onChangeText={mobile => setMobile(mobile)}
                  placeholder={'123456789'}
                  defaultValue={mobile}
                  height={hp('6%')}
                />
              </View>
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'From'}
                  InputField={true}
                  onChangeText={from => setFrom(from)}
                  placeholder={'Sultanpur, UP'}
                  defaultValue={from}
                  height={hp('6%')}
                />
              </View>
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'No. of Person'}
                  InputField={true}
                  onChangeText={peron => setPerson(person)}
                  placeholder={'2'}
                  defaultValue={person}
                  height={hp('6%')}
                />
              </View>

              <View style={styles.Tops}>
                <VisitorCard
                  simpleText={true}
                  label={'Meet To'}
                  // InputField={true}
                  // onChangeText={meet => setMeet(meet)}
                  // placeholder={'Select Role'}
                  // defaultValue={meet}
                  // height={hp('6%')}
                />
              </View>

              <DropDownPicker
                zIndex={6000}
                zIndexInverse={1000}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                containerStyle={{
                  width: '90%',
                  alignSelf: 'center',
                }}
              />

              <View style={styles.Tops}>
                <VisitorCard
                  simpleText={true}
                  label={'Department/Class'}
                  // InputField={true}
                  // onChangeText={dpt => setDpt(dpt)}
                  // placeholder={'Select'}
                  // defaultValue={dpt}
                  // height={hp('6%')}
                />
              </View>

              <DropDownPicker
                zIndex={3000}
                zIndexInverse={1000}
                open={open1}
                value={value1}
                items={selectDptArray}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setSelectDptArray}
                listMode="SCROLLVIEW"
                containerStyle={{
                  width: '90%',
                  alignSelf: 'center',
                }}
              />

              <View style={styles.Tops}>
                <VisitorCard
                  simpleText={true}
                  label={'Name'}
                  // InputField={true}
                  // onChangeText={date => setDate(date)}
                  // placeholder={'Select Name'}
                  // defaultValue={date}
                  // height={hp('6%')}
                />
              </View>
              <DropDownPicker
                zIndex={1000}
                zIndexInverse={3000}
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                listMode="SCROLLVIEW"
                containerStyle={{
                  width: '90%',
                  alignSelf: 'center',
                }}
              />
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'Note (If Any)'}
                  height={hp('15%')}
                  InputField={true}
                  onChangeText={note => setNote(note)}
                  defaultValue={note}
                  maxLength={250}
                  numberOfLines={4}
                  multiline={true}
                />
              </View>

              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'Meeting Purpose'}
                  height={hp('15%')}
                  InputField={true}
                  onChangeText={purpose => setPurpose(purpose)}
                  defaultValue={purpose}
                  maxLength={250}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
              {/* <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'In Time'}
                  InputField={true}
                  onChangeText={time => setTime(time)}
                  placeholder={'09:00 Am'}
                  defaultValue={time}
                  height={hp('6%')}
                />
              </View>
              <View style={styles.Top}>
                <VisitorCard
                  simpleText={true}
                  label={'Out'}
                  InputField={true}
                  onChangeText={out => setOut(out)}
                  placeholder={'10:00 Am'}
                  defaultValue={out}
                  height={hp('6%')}
                />
              </View> */}
            </View>
            <View style={styles.btnSubmit}>
              <Buttons
                alignSelf={ALIGN.align}
                btnMedium2={true}
                label={'Submit'}
                onPress={() => submitFun()}
                txtColor={COLORS.white}
                BGColor={COLORS.dashcard20}
                BDColor={COLORS.dashcard20}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default VisitorControl;
