import {useNavigation} from '@react-navigation/native';
import {useEffect, useReducer, useState} from 'react';
import {Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationString} from '../constants/navigationName';
import {
  closeDialog,
  SendEmailOtp,
  SendMobileOtp,
  verifyEmailOtp,
  verifyMobileOtp,
} from '../redux/reducer/auth/MobileEmailReducer';

const useSignup = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [datetext, setDatetext] = useState('Date of Birth');
  const [timer, setTimer] = useState(59);
  const {
    sendMobileOtp,
    sendEmailOtp,
    verifyMobile,
    verifyEmail,
    mobilespinner,
    emailspinner,
    error,
  } = useSelector(state => state.MobileEmail);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Actions = {
    firstName: 'firstname',
    middleName: 'middlename',
    lastName: 'lastname',
    role: 'role',
    type: 'type',
    address: 'address',
    pincode: 'pincode',
    state: 'state',
    district: 'district',
    confirmpasswor: 'confirmpasswor',
    createpassword: 'createpassword',
    selectRole: 'selectrole',
    selectGender: 'selectgender',
    selectLanguage: 'selectlanguage',
    selectype: 'selecttype',
    gender: 'gender',
    hindi: 'hindi',
    english: 'english',
    mobileno: 'mobileno',
    emailid: 'emailid',
    emailotp: 'emailotp',
    mobileotp: ' mobileotp',
    firstPage: 'firstPage',
    firstPagenotdirector: 'notdirector',
    secondPage: 'secondPage',
    errorfirstpage: 'errorfirstpage',
    errorsecondtpage: 'errorsecondtpage',
    errorlastpage: 'errorlastpage',
    dialog: 'dialog',
    errorotp: 'errorotp',
    director: 'director',
    parent: 'parent',
    staff: 'staff',
    congrats: 'congrats',
  };
  const initialState = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    dateofbirth: '',
    mobileno: '',
    emailid: '',
    pincode: '',
    state: '',
    district: '',
    role: '',
    type: '',
    gender: '',
    schooltype: '',
    language: '',
    english: '',
    hindi: '',
    emailotp: '',
    mobileotp: '',
    schoolinitial: '',
    createpassword: '',
    confirmpasswor: '',
    personal: true,
    addressview: false,
    last: false,
    roleselect: false,
    genderselect: false,
    typeselect: false,
    languageselect: false,
    dialog: false,
    errorfirstpage: {},
    errorsecondpage: {},
    errorlastpage: {},
    errorotp: {},
    director: false,
    parent: false,
    staff: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case Actions.selectGender:
        return {...state, genderselect: !state.genderselect};
      case Actions.selectRole:
        return {...state, roleselect: !state.roleselect};
      case Actions.selectLanguage:
        return {...state, languageselect: !state.languageselect};
      case Actions.selectype:
        return {...state, typeselect: !state.typeselect};
      case Actions.gender:
        return {...state, gender: action.data, genderselect: false};
      case Actions.role:
        return {...state, role: action.data, roleselect: false};
      case Actions.english:
        if (state.english) {
          return {...state, english: ''};
        } else {
          return {...state, english: action.data};
        }
      case Actions.hindi:
        if (state.hindi) {
          return {...state, hindi: ''};
        } else {
          return {...state, hindi: action.data};
        }
      case Actions.type:
        return {...state, type: action.data, typeselect: false};
      case Actions.firstName:
        return {...state, firstName: action.data};
      case Actions.middleName:
        return {...state, middleName: action.data};
      case Actions.lastName:
        return {...state, lastName: action.data};
      case Actions.address:
        return {...state, address: action.data};
      case Actions.pincode:
        return {...state, pincode: action.data};
      case Actions.state:
        return {...state, state: action.data};
      case Actions.district:
        return {...state, district: action.data};
      case Actions.mobileno:
        return {...state, mobileno: action.data};
      case Actions.emailid:
        return {...state, emailid: action.data};
      case Actions.emailotp:
        return {...state, emailotp: action.data};
      case Actions.mobileotp:
        return {...state, mobileotp: action.data};
      case Actions.createpassword:
        return {...state, createpassword: action.data};
      case Actions.confirmpasswor:
        return {...state, confirmpasswor: action.data};
      case Actions.errorfirstpage:
        return {...state, errorfirstpage: action.data};
      case Actions.firstPage:
        return {...state, personal: false, addressview: true};
      case Actions.firstPagenotdirector:
        return {...state, personal: false, last: true};
      case Actions.errorsecondtpage:
        return {...state, errorsecondpage: action.data};
      case Actions.secondPage:
        return {...state, addressview: false, last: true};
      case Actions.errorlastpage:
        return {...state, errorlastpage: action.data};
      case Actions.errorotp:
        return {...state, errorotp: action.data};
      case Actions.dialog:
        return {...state, dialog: !state.dialog};
      case Actions.staff:
        return {...state, staff: true};
      case Actions.parent:
        return {...state, parent: true};
      case Actions.director:
        return {...state, director: true};
      case Actions.congrats:
        return {...state, director: false, staff: false, parent: false};
      default:
        return {...state};
    }
  };
  const onSelectClick = action => {
    dispatchState({
      type: action,
    });
  };
  const onSelectItemClick = ({type, data}) => {
    dispatchState({
      type,
      data,
    });
  };
  const onChange = (type, data) => {
    dispatchState({
      type,
      data,
    });
  };
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempdate = new Date(currentDate);
    let fdate =
      tempdate.getDate() +
      '/' +
      (tempdate.getMonth() + 1) +
      '/' +
      tempdate.getFullYear();
    setDatetext(fdate);
  };
  const FirstPage = () => {
    let errorfirstpage = {};
    if (!state.firstName.trim()) {
      errorfirstpage.firstName = 'Firstname is required';
    }
    if (!state.role.trim()) {
      errorfirstpage.role = 'Role is required';
    }
    if (!state.gender.trim()) {
      errorfirstpage.gender = 'Gender is required';
    }
    if (datetext === 'Date of Birth') {
      errorfirstpage.dateofbirth = 'Date of Birth required';
    }
    dispatchState({
      type: Actions.errorfirstpage,
      data: errorfirstpage,
    });
    if (Object.keys(errorfirstpage).length === 0) {
      if (state.role !== 'Director') {
        dispatchState({
          type: Actions.firstPagenotdirector,
        });
      } else {
        dispatchState({
          type: Actions.firstPage,
        });
      }
    }
  };
  const SecondPage = () => {
    let errorsecondpage = {};

    let pincoderegex = /^[0-9]{6}$/;
    if (!state.address.trim()) {
      errorsecondpage.address = 'Address is requird';
    }
    if (!state.state.trim()) {
      errorsecondpage.state = 'State is requird';
    }
    if (!state.district.trim()) {
      errorsecondpage.district = 'District is requird';
    }
    if (!state.pincode.trim()) {
      errorsecondpage.pincode = 'Pincode is required';
    } else if (!pincoderegex.test(state.pincode)) {
      errorsecondpage.pincode = 'Pin Code Should be Numbers or 6 Digits only';
    }
    if (!state.type.trim()) {
      errorsecondpage.type = 'Type is required';
    }

    dispatchState({
      type: Actions.errorsecondtpage,
      data: errorsecondpage,
    });
    if (Object.keys(errorsecondpage).length === 0) {
      dispatchState({
        type: Actions.secondPage,
      });
    }
  };
  const LastPage = () => {
    let errorlastpage = {};
    let regex = /^[0-9]{10}$/;
    if (!state.mobileno.trim()) {
      errorlastpage.mobileno = 'Mobile Number is Required';
    } else if (state.mobileno.length < 10 || state.mobileno.length > 11) {
      errorlastpage.mobileno = 'Mobile no Must be 10 digits';
    } else if (!regex.test(state.mobileno)) {
      errorlastpage.mobileno = 'Mobile no Should be Numbers';
    }
    let emailregex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!state.emailid.trim()) {
      errorlastpage.emailid = 'Email Id is required';
    } else if (!emailregex.test(state.emailid)) {
      errorlastpage.emailid = 'Email Id Not valid';
    }
    if (!state.createpassword.trim()) {
      errorlastpage.createpassword = 'Create Password is required';
    }
    if (!state.confirmpasswor.trim()) {
      errorlastpage.confirmpasswor = 'Confirm Password is required';
    } else if (state.createpassword !== state.confirmpasswor) {
      errorlastpage.confirmpasswor = 'Password do not Match';
    }
    dispatchState({
      type: Actions.errorlastpage,
      data: errorlastpage,
    });
    if (Object.keys(errorlastpage).length === 0) {
      if (state.role === 'Director') {
        dispatch(SendEmailOtp(state.emailid));
        dispatch(SendMobileOtp(state.mobileno));
      }
      if (state.role === 'Staff') {
        dispatch(SendEmailOtp(state.emailid));
      }
      if (state.role === 'Parent') {
        dispatch(SendMobileOtp(state.mobileno));
      }
    }
  };
  const congrats = async () => {
    await dispatchState({type: Actions.congrats});
    navigation.navigate(NavigationString.Login);
  };
  const [state, dispatchState] = useReducer(reducer, initialState);

  const serverSendingDataofDirector = {
    schoolName: state.schoolName,
    schoolInitials: state.schoolInitials,
    address: {
      address: state.address,
      dist: state.district,
      state: state.state,
      pinCode: state.pinCode,
    },
    directorFirstName: state.firstName,
    directorMiddleName: state.middleName,
    directorLastName: state.middleName,
    contactNumber: state.mobileno,
    email: state.emailid,
    medium: state.medium,
    schoolRegistrationNumber: state.schoolRegistrationNumber,
    password: state.confirmpasswor,
  };
  const serverSendingDataofother = {
    firstName: state.firstName,
    middleName: state.middleName,
    lastName: state.lastName,
    mobileNumber: state.mobileno,
    email: state.emailid,
    password: state.confirmpasswor,
  };
  const handleVerifyMobileOtp = () => {
    let error = {};
    if (state.mobileotp === '') {
      error.mobileotp = 'otp required';
    }
    dispatchState({type: Actions.errorotp, data: error});
    if (Object.keys(error).length === 0) {
      const res = {
        medium: state.mobileno,
        otp: state.mobileotp,
      };
      const roles = state.role;
      if (state.role === 'Parent') {
        dispatch(verifyMobileOtp({res, serverSendingDataofother, roles}));
      }
    }
  };
  const handleVerifyEmailOtp = () => {
    let errors = {};
    if (state.emailotp === '') {
      errors.emailotp = 'Email otp required';
    }
    dispatchState({type: Actions.errorotp, data: errors});
    if (Object.keys(error).length === 0) {
      const res = {
        medium: state.emailid,
        otp: state.emailotp,
      };
      const roles = state.role;
      if (state.role === 'Staff') {
        dispatch(verifyEmailOtp({res, serverSendingDataofother, roles}));
      }
      if (state.role === 'Director') {
        dispatch(verifyEmailOtp({res, serverSendingDataofDirector, roles}));
      }
    }
  };
  useEffect(() => {
    if (state.role === 'Staff' && verifyEmail) {
      dispatch(closeDialog());
      dispatchState({type: Actions.staff});
    }
    if (state.role === 'Parent' && verifyMobile) {
      dispatch(closeDialog());
      dispatchState({type: Actions.parent});
    }
    if (state.role === 'Director' && verifyMobile && verifyEmail) {
      dispatch(closeDialog());
      dispatchState({type: Actions.director});
    }
  }, [
    verifyEmail,
    verifyMobile,
    state.role,
    Actions.staff,
    Actions.parent,
    Actions.director,
    dispatch,
  ]);
  useEffect(() => {
    setTimeout(() => {
      if ((sendEmailOtp || sendMobileOtp) && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
  }, [sendEmailOtp, sendMobileOtp, timer]);

  return {
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
    dispatchState,
    handleVerifyEmailOtp,
    handleVerifyMobileOtp,
    congrats,
  };
};

export default useSignup;
