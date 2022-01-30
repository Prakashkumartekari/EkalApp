import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Modal, Portal, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {globalStyles} from '../../../../constants/globalStyle';
import {NavigationString} from '../../../../constants/navigationName';
import {updateStaffProfile} from '../../../../redux/reducer/updateProfile/StaffSlice';
import LoaderDialog from '../../../components/Dialog/LoaderDialog';

const BankDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    loader,
    personalDetail,
    parentDetail,
    addressDetail,
    experienceDetail,
    updateStaffProfileMessage,
  } = useSelector(states => states.updateStaff);
  const {staffprofile} = useSelector(states => states.auth);
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    bank: '',
    branch: '',
    ifsc: '',
    accountnumber: '',
    accountholder: '',
    errors: {},
  });
  const onpressSubmite = () => {
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
    setState({...state, errors: error});
    if (Object.keys(error).length === 0) {
      const data1 = {
        alternateNumber: personalDetail.alternateno
          ? personalDetail.alternateno
          : 'string',
        bankDetails: {
          accountNumber: state.accountnumber,
          bankName: state.bank,
          branch: state.branch,
          holderName: state.accountholder,
          ifscCode: state.ifsc,
        },
        currentAddress: {
          address: addressDetail.address,
          dist: addressDetail.district,
          pinCode: addressDetail.pincode,
          state: addressDetail.state,
        },
        dob: personalDetail.dob,
        educationInfo: [
          {
            className: 'string',
            grades: 'string',
            instituteName: 'string',
            marks: 'string',
            passingYear: 'string',
            stream: 'string',
            university: 'string',
          },
        ],
        email: personalDetail.emailid,
        experiences: [
          {
            designation: experienceDetail.designation,
            document: 'string',
            employerName: experienceDetail.employename,
            from: experienceDetail.from,
            salary: parseInt(experienceDetail.prevsalary),
            to: experienceDetail.to,
            worksOn: [`${experienceDetail.workon}`],
          },
        ],
        fatherInfo: {
          email: 'string',
          firstName: parentDetail.fatherfirst,
          lastName: parentDetail.fatherlast
            ? parentDetail.fatherlast
            : 'string',
          middleName: parentDetail.fathermiddle
            ? parentDetail.fathermiddle
            : 'string',
          mobileNumber: 'string',
          occupation: 'string',
        },
        firstName: personalDetail.firstName,
        gender: personalDetail.gender,
        lastName: personalDetail.lastName ? personalDetail.lastName : 'string',
        lastSalary: experienceDetail.prevsalary,
        maritalStatus: personalDetail.marital,
        middleName: personalDetail.middleName
          ? personalDetail.middleName
          : 'string',
        mobileNumber: personalDetail.mobileno,
        motherInfo: {
          email: 'string',
          firstName: parentDetail.motherfirst,
          lastName: parentDetail.motherlast
            ? parentDetail.motherlast
            : 'string',
          middleName: parentDetail.mothermiddle
            ? parentDetail.mothermiddle
            : 'string',
          mobileNumber: 'string',
          occupation: 'string',
        },
        pan: personalDetail.pannumber,
        permanentAddress: {
          address: addressDetail.address2,
          dist: addressDetail.district2,
          pinCode: addressDetail.pincode2,
          state: addressDetail.state2,
        },
        profilePic: personalDetail.imagerurl,
        staffDocId: staffprofile?.list[0]?.id,
      };

      dispatch(updateStaffProfile(data1));
    }
  };
  const handleokpress = () => {
    setModal(false);
    navigation.navigate(NavigationString.RequestSchool2);
  };
  useEffect(() => {
    if (updateStaffProfileMessage) {
      updateStaffProfileMessage.message === 'Updated' ? setModal(true) : null;
    }
  }, [updateStaffProfileMessage]);
  return (
    <>
      <ScrollView>
        <LoaderDialog state={loader} />
        <View style={{margin: 20}}>
          <View style={globalStyles.inputFieldContainer}>
            <TextInput
              style={globalStyles.inputField}
              outlineColor="#fff"
              theme={{roundness: 10}}
              label="Bank Name"
              value={state.bank}
              onChangeText={text => setState({...state, bank: text})}
              mode="outlined"
            />
          </View>
          {state.errors.bank && (
            <Text style={globalStyles.red}>{state.errors.bank}</Text>
          )}
          <View style={globalStyles.inputFieldContainer}>
            <TextInput
              style={globalStyles.inputField}
              outlineColor="#fff"
              theme={{roundness: 10}}
              label="Branch"
              onChangeText={text => setState({...state, branch: text})}
              value={state.branch}
              mode="outlined"
            />
          </View>
          {state.errors.branch && (
            <Text style={globalStyles.red}>{state.errors.branch}</Text>
          )}
          <View style={globalStyles.inputFieldContainer}>
            <TextInput
              style={globalStyles.inputField}
              outlineColor="#fff"
              theme={{roundness: 10}}
              onChangeText={text => setState({...state, ifsc: text})}
              value={state.ifsc}
              label="IFSC Code"
              mode="outlined"
            />
          </View>
          {state.errors.ifsc && (
            <Text style={globalStyles.red}>{state.errors.ifsc}</Text>
          )}
          <View style={globalStyles.inputFieldContainer}>
            <TextInput
              style={globalStyles.inputField}
              outlineColor="#fff"
              theme={{roundness: 10}}
              label="Account Number"
              onChangeText={text => setState({...state, accountnumber: text})}
              value={state.accountnumber}
              mode="outlined"
            />
          </View>
          {state.errors.accountnumber && (
            <Text style={globalStyles.red}>{state.errors.accountnumber}</Text>
          )}
          <View style={globalStyles.inputFieldContainer}>
            <TextInput
              style={globalStyles.inputField}
              outlineColor="#fff"
              theme={{roundness: 10}}
              onChangeText={text => setState({...state, accountholder: text})}
              value={state.accountholder}
              label="Account Holder Name"
              mode="outlined"
            />
          </View>
          {state.errors.accountholder && (
            <Text style={globalStyles.red}>{state.errors.accountholder}</Text>
          )}
          <View style={{alignItems: 'flex-end', margin: 20}}>
            <Button
              mode="contained"
              theme={{roundness: 30}}
              style={{elevation: 10, width: 100}}
              onPress={onpressSubmite}>
              Submit
            </Button>
          </View>
        </View>
      </ScrollView>
      <Portal>
        <Modal visible={modal}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 30,
              marginHorizontal: 30,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'green', fontSize: 18, fontWeight: '600'}}>
              Profile Update Request Sended
            </Text>
            <Button
              theme={{roundness: 20}}
              mode="contained"
              color="green"
              onPress={handleokpress}
              style={{width: 100, marginTop: 20}}>
              Ok
            </Button>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default BankDetail;
