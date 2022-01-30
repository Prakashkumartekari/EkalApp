import {useEffect, useReducer, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getstaffProfile, updateHome} from '../redux/reducer/auth/AuthReducer';
import {Platform} from 'react-native';

const useHome = () => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date());
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [datetext, setDatetext] = useState('Date of Birth');
  const [datetext2, setDatetext2] = useState('From');
  const [datetext3, setDatetext3] = useState('To');
  const {loginDetail, staffprofile} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const Actions = {
    firstName: 'firstname',
    middleName: 'middlename',
    lastName: 'lastname',
    fatherfirst: 'fatherfirst',
    fathermiddle: 'fathermiddle',
    fatherlast: 'fatherlast',
    motherfirst: 'motherfirst',
    mothermiddle: 'mothermiddle',
    motherlast: 'motherlast',
    marital: 'marital',
    type: 'type',
    address: 'address',
    pincode: 'pincode',
    state: 'state',
    district: 'district',
    sameas: 'sameas',
    address2: 'address2',
    pincode2: 'pincode2',
    state2: 'state2',
    district2: 'district2',
    selectMarital: 'selectmarital',
    selectGender: 'selectgender',
    selectLanguage: 'selectlanguage',
    selectype: 'selecttype',
    gender: 'gender',
    hindi: 'hindi',
    english: 'english',
    mobileno: 'mobileno',
    alternateno: 'alternateno',
    emailid: 'emailid',
    pannumber: 'pannumber',
    bank: 'bank',
    branch: ' branch',
    ifsc: 'ifsc',
    to: 'to',
    from: 'from',
    designation: 'designation',
    workon: 'workon',
    experience: 'experience',
    employename: 'employename',
    accountnumber: 'accountnumber',
    accountholder: 'accountholder',
    PersonalPage: 'PersonalPage',
    ParentPage: 'ParentPage',
    AddressPage: 'AddressPage',
    BankPage: 'BankPage',
    ExperiencePage: 'ExperiencePage',
    errorPersonalPage: ' errorPersonalPage',
    errorParentPage: 'errorParentPage',
    errorAddressPage: 'errorAddressPage',
    errorBankPage: 'errorBankPage',
    errorExperiencePage: 'errorExperiencePage',
    updateprofilestat: 'updateprofilestat',
  };
  const initialState = {
    firstName: '',
    middleName: '',
    lastName: '',
    fatherfirst: '',
    fathermiddle: '',
    fatherlast: '',
    motherfirst: '',
    mothermiddle: '',
    motherlast: '',
    dateofbirth: '',
    mobileno: '',
    alternateno: '',
    emailid: '',
    address: '',
    pincode: '',
    state: '',
    district: '',
    sameas: '',
    address2: '',
    pincode2: '',
    state2: '',
    district2: '',
    pannumber: '',
    bank: '',
    branch: '',
    ifsc: '',
    accountnumber: '',
    accountholder: '',
    marital: '',
    type: '',
    gender: '',
    schooltype: '',
    language: [],
    english: '',
    hindi: '',
    schoolinitial: '',
    createpassword: '',
    confirmpasswor: '',
    employename: '',
    to: '',
    from: '',
    designation: '',
    experience: '',
    workon: '',
    ok: true,
    personaldetail: true,
    parentsdetail: false,
    addressdetail: false,
    bankdetail: false,
    educationdetail: false,
    experiancedetail: false,
    maritalselect: false,
    genderselect: false,
    typeselect: false,
    languageselect: false,
    errorPersonalPage: {},
    errorParentPage: {},
    errorAddressPage: {},
    errorBankPage: {},
    errorExperiencePage: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case Actions.selectGender:
        return {...state, genderselect: !state.genderselect};
      case Actions.selectMarital:
        return {...state, maritalselect: !state.roleselect};
      case Actions.selectLanguage:
        return {...state, languageselect: !state.languageselect};
      case Actions.selectype:
        return {...state, typeselect: !state.typeselect};
      case Actions.gender:
        return {...state, gender: action.data, genderselect: false};
      case Actions.marital:
        return {...state, marital: action.data, maritalselect: false};
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
      case Actions.fatherfirst:
        return {...state, fatherfirst: action.data};
      case Actions.fathermiddle:
        return {...state, fathermiddle: action.data};
      case Actions.fatherlast:
        return {...state, fatherlast: action.data};
      case Actions.motherfirst:
        return {...state, motherfirst: action.data};
      case Actions.mothermiddle:
        return {...state, mothermiddle: action.data};
      case Actions.motherlast:
        return {...state, motherlast: action.data};
      case Actions.address:
        return {...state, address: action.data};
      case Actions.address2:
        return {...state, address2: action.data};
      case Actions.pincode:
        return {...state, pincode: action.data};
      case Actions.pincode2:
        return {...state, pincode2: action.data};
      case Actions.state:
        return {...state, state: action.data};
      case Actions.state2:
        return {...state, state2: action.data};
      case Actions.district:
        return {...state, district: action.data};
      case Actions.district2:
        return {...state, district2: action.data};
      case Actions.to:
        return {...state, to: action.data};
      case Actions.from:
        return {...state, from: action.data};
      case Actions.designation:
        return {...state, designation: action.data};
      case Actions.workon:
        return {...state, workon: action.data};
      case Actions.experience:
        return {...state, experience: action.data};
      case Actions.employename:
        return {...state, employename: action.data};
      case Actions.sameas:
        if (state.sameas) {
          return {
            ...state,
            sameas: '',
            address2: '',
            pincode2: '',
            state2: '',
            district2: '',
          };
        } else {
          return {
            ...state,
            sameas: action.data,
            address2: state.address,
            pincode2: state.pincode,
            state2: state.state,
            district2: state.district,
          };
        }
      case Actions.pannumber:
        return {...state, pannumber: action.data};
      case Actions.mobileno:
        return {...state, mobileno: action.data};
      case Actions.alternateno:
        return {...state, alternateno: action.data};
      case Actions.emailid:
        return {...state, emailid: action.data};
      case Actions.bank:
        return {...state, bank: action.data};
      case Actions.branch:
        return {...state, branch: action.data};
      case Actions.ifsc:
        return {...state, ifsc: action.data};
      case Actions.accountnumber:
        return {...state, accountnumber: action.data};
      case Actions.accountholder:
        return {...state, accountholder: action.data};
      case Actions.errorPersonalPage:
        return {...state, errorPersonalPage: action.data};
      case Actions.errorParentPage:
        return {...state, errorParentPage: action.data};
      case Actions.errorAddressPage:
        return {...state, errorAddressPage: action.data};
      case Actions.errorBankPage:
        return {...state, errorBankPage: action.data};
      case Actions.errorExperiencePage:
        return {...state, errorExperiencePage: action.data};
      case Actions.PersonalPage:
        return {...state, personaldetail: false, parentsdetail: true};
      case Actions.ParentPage:
        return {...state, parentsdetail: false, addressdetail: true};
      case Actions.AddressPage:
        return {...state, addressdetail: false, bankdetail: false};
      case Actions.BankPage:
        return {...state, bankdetail: false, experiancedetail: true};
      case Actions.updateprofilestat:
        action.data?.map(item => {
          return {
            ...state,
            firstName: item.firstName,
            emailid: item.email,
            mobileno: item.mobileNumber,
          };
        });

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
  const onChangeDate2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
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
  const onChangeDate3 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
    let tempdate = new Date(currentDate);
    let fdate =
      tempdate.getDate() +
      '/' +
      (tempdate.getMonth() + 1) +
      '/' +
      tempdate.getFullYear();
    setDatetext3(fdate);
  };
  const homeok = () => {
    dispatch(updateHome(1));
  };
  const PersonalPage = () => {
    let error = {};
    let regex = /^[0-9]{10}$/;
    if (!state.firstName.trim()) {
      error.firstName = 'Firstname is required';
    }
    if (!state.pannumber.trim()) {
      error.pannumber = 'PAN Number is required';
    }
    if (!state.gender.trim()) {
      error.gender = 'Gender is required';
    }
    if (datetext === 'Date of Birth') {
      error.dateofbirth = 'Date of Birth required';
    }
    if (!state.marital.trim()) {
      error.marital = 'Marital Status is required';
    }
    if (
      (state.alternateno.length < 10 && state.alternateno.length > 0) ||
      state.alternateno.length > 11
    ) {
      error.alternateno = 'Alternate no Must be 10 digits';
    } else if (!regex.test(state.alternateno) && state.alternateno.length > 0) {
      error.alternateno = 'Mobile no Should be Numbers';
    }

    dispatchState({
      type: Actions.errorPersonalPage,
      data: error,
    });
    if (Object.keys(error).length === 0) {
      dispatch(updateHome(2));
    }
  };
  const ParentsPage = () => {
    let error = {};

    if (!state.fatherfirst.trim()) {
      error.fatherfirst = 'Firstname is requird';
    }
    if (!state.motherfirst.trim()) {
      error.motherfirst = 'Firstname is requird';
    }
    dispatchState({
      type: Actions.errorParentPage,
      data: error,
    });
    if (Object.keys(error).length === 0) {
      dispatch(updateHome(3));
    }
  };
  const AddressPage = () => {
    let error = {};
    let pincoderegex = /^[0-9]{6}$/;
    if (!state.address.trim()) {
      error.address = 'Temporary Address is requird';
    }
    if (!state.state.trim()) {
      error.state = 'State is requird';
    }
    if (!state.district.trim()) {
      error.district = 'District is requird';
    }
    if (!state.pincode.trim()) {
      error.pincode = 'Pincode is required';
    } else if (!pincoderegex.test(state.pincode)) {
      error.pincode = 'Pin Code Should be Numbers or 6 Digits only';
    }
    if (!state.address2.trim()) {
      error.address2 = 'Permanent Address is requird';
    }
    if (!state.state2.trim()) {
      error.state2 = 'State is requird';
    }
    if (!state.district2.trim()) {
      error.district2 = 'District is requird';
    }
    if (!state.pincode2.trim()) {
      error.pincode2 = 'Pincode is required';
    } else if (!pincoderegex.test(state.pincode2)) {
      error.pincode2 = 'Pin Code Should be Numbers or 6 Digits only';
    }
    dispatchState({
      type: Actions.errorAddressPage,
      data: error,
    });
    if (Object.keys(error).length === 0) {
      dispatch(updateHome(4));
    }
  };
  const BankPage = () => {
    let error = {};
    if (!state.bank.trim()) {
      error.bank = 'Bank Name is required';
    }
    if (!state.branch.trim()) {
      error.branch = 'Branch Name is required';
    }
    if (!state.ifsc.trim()) {
      error.ifsc = 'IFSC is required';
    }
    if (!state.accountnumber.trim()) {
      error.accountnumber = 'Acccount Number is required';
    }
    if (!state.accountholder.trim()) {
      error.accountholder = 'Account Holder Name is required';
    }
    dispatchState({
      type: Actions.errorBankPage,
      data: error,
    });
    if (Object.keys(error).length === 0) {
      dispatch(updateHome(5));
    }
  };
  const ExperiencePage = () => {
    dispatch(updateHome(6));
  };
  const schoolecodeverify = () => {
    dispatch(updateHome(7));
  };
  const schoolecodesendrequest = () => {
    dispatch(updateHome(8));
  };

  const [state, dispatchState] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch(getstaffProfile(loginDetail?.username));
  //   dispatchState({
  //     type: Actions.updateprofilestat,
  //     data: staffprofile?.list,
  //   });
  // }, [dispatch]);
  return {
    state,
    Actions,
    date,
    date2,
    date3,
    show,
    show2,
    show3,
    datetext,
    datetext2,
    datetext3,
    homeok,
    setShow,
    setShow2,
    setShow3,
    onChangeDate,
    onChangeDate2,
    onChangeDate3,
    onSelectClick,
    onSelectItemClick,
    onChange,
    PersonalPage,
    ParentsPage,
    AddressPage,
    BankPage,
    ExperiencePage,
    schoolecodeverify,
    schoolecodesendrequest,
  };
};

export default useHome;
