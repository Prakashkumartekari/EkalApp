import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Modal, Portal, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {globalStyles} from '../../../../constants/globalStyle';
import appTheme from '../../../../constants/theme';
import {
  pendingrequestToschool,
  getSchoolInfoByCode,
  requestSchool,
  withdrawRequest,
} from '../../../../redux/reducer/updateProfile/StaffSlice';

const {hp, wp} = appTheme;
const RequestSchool = () => {
  const {
    loader,
    pendingrequest,
    SchoolInfoByCode,
    schoolRequest,
    requestWithdraw,
  } = useSelector(states => states.updateStaff);

  const {staffprofile} = useSelector(states => states.auth);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    schoolcode: '',
    requestInputText: '',
    pendingschoolrequest: false,
    schoolRequestResponse: false,
    schoolinforesponse: false,
    requestWithdrawResponse: false,
    emptycodefield: false,
    schooverify: false,
    dialog: false,
  });
  console.log('request', pendingrequest);

  const schoolecodeverify = () => {
    if (!state.schoolcode.trim()) {
      setState({...state, emptycodefield: true});
    } else {
      dispatch(getSchoolInfoByCode(state.schoolcode));
    }
  };
  const sendrequest = () => {
    const data = {
      schoolCode: state.schoolcode,
      personDocId: staffprofile.list[0].id,
      requestedFor: state.requestInputText,
    };
    dispatch(requestSchool(data));
  };
  const changeSchool = () => {
    if (state.pendingschoolrequest?.list) {
      dispatch(
        withdrawRequest(state.pendingschoolrequest?.list[0].requestToSchool.id),
      );
    } else {
      console.log(state.schoolinforesponse);
      // dispatch(
      //   withdrawRequest(state.schoolinforesponse?.list[0].requestToSchool.id),
      // );
    }
    setState({...state, dialog: false});
  };
  useEffect(() => {
    if (pendingrequest) {
      setState({...state, pendingschoolrequest: pendingrequest});
    }
    if (SchoolInfoByCode) {
      setState({...state, schoolinforesponse: SchoolInfoByCode});
    }
    if (schoolRequest) {
      console.log('request use effect');
      setState({...state, schoolRequestResponse: schoolRequest});
    }
    if (requestWithdraw) {
      setState({...state, requestWithdrawResponse: requestWithdraw});
    }
  }, [SchoolInfoByCode, schoolRequest, requestWithdraw, pendingrequest]);

  useEffect(() => {
    dispatch(pendingrequestToschool(staffprofile?.list[0].id));
  }, []);
  useEffect(() => {
    if (requestWithdraw) {
      console.log('in request withdraw');
      dispatch(pendingrequestToschool(staffprofile?.list[0].id));
    }
    if (requestSchool) {
      console.log('in request withdraw');
      dispatch(pendingrequestToschool(staffprofile?.list[0].id));
    }
  }, [requestWithdraw, requestSchool]);

  return (
    <>
      {state.pendingschoolrequest?.list ? (
        <>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              paddingVertical: 5,
              elevation: 10,
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              You Hve successfully Applied with a school.
            </Text>
            <Text
              style={{
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              Your request is pending to approve
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: wp('5%'),
              height: '100%',
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: wp('2%'),
                paddingVertical: hp('2%'),
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
                borderRadius: 10,
                marginVertical: hp('4%'),
              }}>
              {state.pendingschoolrequest?.list && (
                <>
                  <Text style={{fontSize: 22, color: '#444'}}>
                    Your Requested School
                  </Text>
                  <Text style={{color: 'green', fontSize: 18, marginTop: 7}}>
                    {state.pendingschoolrequest?.list[0]?.schoolName}
                  </Text>
                  <Text
                    style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                    {state.pendingschoolrequest?.list[0]?.schoolAddress.address.slice(
                      0,
                      35,
                    )}
                    ...
                  </Text>
                  {state.pendingschoolrequest?.list && (
                    <Text
                      style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                      {`${state.pendingschoolrequest?.list[0]?.schoolAddress.dist}, ${state.pendingschoolrequest?.list[0]?.schoolAddress.state}, ${state.pendingschoolrequest?.list[0]?.schoolAddress.pinCode}`}
                    </Text>
                  )}
                </>
              )}
            </View>
            <Button
              mode="contained"
              theme={{roundness: 10}}
              color="yellow"
              style={{
                elevation: 10,
              }}
              labelStyle={{paddingVertical: 4, fontSize: 17}}
              onPress={() => setState({...state, dialog: !state.dialog})}>
              Change School
            </Button>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              paddingVertical: 5,
              elevation: 10,
            }}>
            {!state.schoolRequestResponse ? (
              <>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}>
                  You have not registered with any school yet
                </Text>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}>
                  Please ask secret code of your school
                </Text>
              </>
            ) : (
              <>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}>
                  You Hve successfully Applied with a school.
                </Text>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}>
                  Your request is pending to approve
                </Text>
              </>
            )}
          </View>
          <View
            style={{
              paddingHorizontal: wp('5%'),
              height: '100%',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22}}>Enter Your School Code</Text>
            <View style={globalStyles.inputFieldContainer}>
              <TextInput
                style={globalStyles.inputField}
                outlineColor="#fff"
                value={state.schoolcode}
                editable={!state.schoolinforesponse ? true : false}
                onChangeText={text =>
                  setState({...state, schoolcode: text, emptycodefield: false})
                }
                theme={{roundness: 10}}
                label="Enter School Code"
                mode="outlined"
              />
            </View>
            {state.emptycodefield && (
              <View>
                <Text style={{color: 'red', fontSize: 16}}>
                  School code required
                </Text>
              </View>
            )}
            {!state.schoolinforesponse?.list && (
              <View>
                <Text style={{color: 'red', fontSize: 16}}>
                  No School Found
                </Text>
              </View>
            )}
            {state.schoolinforesponse?.list && (
              <View>
                <Text style={{color: 'green', fontSize: 16}}>
                  {state.schoolinforesponse?.list[0].schoolName}
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>
                  {`${state.schoolinforesponse?.list[0].schoolAddress.address.slice(
                    0,
                    50,
                  )}`}
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>
                  {`${state.schoolinforesponse?.list[0].schoolAddress.dist}, ${state.schoolinforesponse?.list[0].schoolAddress.state}, ${state.schoolinforesponse?.list[0].schoolAddress.pinCode}`}
                </Text>
              </View>
            )}
            {state.schoolinforesponse?.list && (
              <View style={{marginVertical: '10%'}}>
                <Text style={{color: '#000', fontSize: 20}}>Request For:</Text>
                <View style={globalStyles.inputFieldContainer}>
                  <TextInput
                    style={[globalStyles.inputField]}
                    value={state.requestInputText}
                    editable={!state.schoolRequestResponse ? true : false}
                    onChangeText={text =>
                      setState({...state, requestInputText: text})
                    }
                    outlineColor="#fff"
                    theme={{roundness: 10}}
                    label="Write Messages"
                    mode="outlined"
                    multiline
                    numberOfLines={4}
                  />
                </View>
              </View>
            )}
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginRight: hp('4%'),
                marginBottom: hp('7%'),
              }}>
              {!state.schoolinforesponse?.list && (
                <Button
                  mode="contained"
                  loading={loader}
                  theme={{roundness: 30}}
                  labelStyle={{fontSize: 18, textTransform: 'capitalize'}}
                  style={{
                    width: wp('30%'),
                    elevation: 10,
                  }}
                  onPress={schoolecodeverify}>
                  Verify
                </Button>
              )}
              {state.schoolinforesponse?.list && !state.schoolRequestResponse && (
                <Button
                  mode="contained"
                  theme={{roundness: 10}}
                  color="green"
                  loading={loader}
                  style={{
                    elevation: 10,
                    paddingHorizontal: '2%',
                    marginBottom: '7%',
                  }}
                  onPress={sendrequest}>
                  Send Request
                </Button>
              )}
              {state.schoolRequestResponse && (
                <Button
                  mode="contained"
                  theme={{roundness: 10}}
                  color="yellow"
                  style={{
                    elevation: 10,
                    paddingHorizontal: '2%',
                    marginBottom: '7%',
                  }}
                  onPress={() => setState({...state, dialog: !state.dialog})}>
                  Change School
                </Button>
              )}
            </View>
          </View>
        </>
      )}

      <Portal>
        <Modal
          visible={state.dialog}
          onDismiss={() => setState({...state, dialog: !state.dialog})}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: wp('2%'),
              paddingVertical: hp('2%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: wp('5%'),
              borderRadius: 10,
            }}>
            {state.pendingschoolrequest?.list && (
              <>
                <Text style={{fontSize: 15, color: '#444', marginVertical: 7}}>
                  Are You sure want to withdraw your request from:
                </Text>

                <Text style={{color: 'green', fontSize: 18, marginTop: 7}}>
                  {state.pendingschoolrequest?.list[0]?.schoolName}
                </Text>
                <Text style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                  {state.pendingschoolrequest?.list[0]?.schoolAddress.address.slice(
                    0,
                    35,
                  )}
                  ...
                </Text>
                <Text style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                  {`${state.pendingschoolrequest?.list[0]?.schoolAddress.dist}, ${state.pendingschoolrequest?.list[0]?.schoolAddress.state}, ${state.pendingschoolrequest?.list[0]?.schoolAddress.pinCode}`}
                </Text>
              </>
            )}
            {state.schoolinforesponse && (
              <>
                <Text style={{fontSize: 16, color: '#444', marginVertical: 7}}>
                  Are sure want to withdraw your request from:
                </Text>

                <Text style={{color: 'green', fontSize: 18, marginTop: 7}}>
                  {state.schoolinforesponse?.list[0]?.schoolName}
                </Text>
                <Text style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                  {state.schoolinforesponse?.list[0]?.schoolAddress.address.slice(
                    0,
                    35,
                  )}
                  ...
                </Text>
                <Text style={{color: '#444', fontSize: 16, marginVertical: 7}}>
                  {`${state.schoolinforesponse?.list[0]?.schoolAddress.dist}, ${state.schoolinforesponse?.list[0]?.schoolAddress.state}, ${state.schoolinforesponse?.list[0]?.schoolAddress.pinCode}`}
                </Text>
              </>
            )}
            <Button
              mode="contained"
              theme={{roundness: 10}}
              color="yellow"
              style={{
                elevation: 10,
                width: 100,
                marginTop: wp('2%'),
              }}
              loading={loader}
              labelStyle={{paddingVertical: 4, fontSize: 17}}
              onPress={changeSchool}>
              Yes
            </Button>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default RequestSchool;
