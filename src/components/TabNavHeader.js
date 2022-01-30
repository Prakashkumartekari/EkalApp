import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getstaffSchoolInfo, logout} from '../../redux/reducer/auth/AuthReducer';
import appTheme from '../../constants/theme';
import {Menu} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
const {SIZES} = appTheme;
const TabNavHeader = ({setLogin}) => {
  const dispatch = useDispatch();
  const {SchoolId} = useSelector(states => states.AttendanceState);
  const {staffprofile, schoolInfo} = useSelector(states => states.auth);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [state, setstate] = useState({
    profilepic: false,
    schoollogo: false,
    schoolName: false,
  });
  const openMenu = () => setVisible(true);
  const openMenu1 = () => setVisible1(true);
  const closeMenu = () => setVisible(false);
  const closeMenu1 = () => setVisible1(false);
  const Logout = () => {
    closeMenu1();
    dispatch(logout());
    setLogin(false);
  };

  useEffect(() => {
    if (staffprofile) {
      staffprofile?.list.map(item => {
        setstate({...state, profilepic: item.profilePic, schoollogo: false});
      });
      if (staffprofile?.list[0].schoolDocId) {
        dispatch(getstaffSchoolInfo(staffprofile?.list[0].schoolDocId));
      }
    }
  }, [staffprofile]);
  useEffect(() => {
    if (schoolInfo?.list.length > 0) {
      setstate({
        ...state,
        schoollogo: schoolInfo?.list[0].schoolLogo,
        schoolName: schoolInfo?.list[0].schoolName,
      });
    }
  }, [schoolInfo]);
  useEffect(() => {
    if (SchoolId) {
      setstate({
        ...state,
        profilepic: SchoolId?.list[0].directorPic,
        schoollogo: SchoolId?.list[0].schoolLogo,
        schoolName: SchoolId?.list[0].schoolName,
      });
    }
  }, [SchoolId]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2789FD',
        paddingHorizontal: SIZES.m3,
        paddingVertical: SIZES.m3,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        {state.schoollogo && (
          <Image
            source={{uri: state.schoollogo}}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
              marginHorizontal: 8,
            }}
          />
        )}
        <View style={{flex: 1, paddingRight: 5}}>
          {state.schoolName && (
            <Text style={{color: '#fff', fontSize: 20}}>
              {state.schoolName.slice(0, 47)}
            </Text>
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 0.3}}>
        <Menu
          statusBarHeight={45}
          visible={visible}
          onDismiss={() => closeMenu()}
          anchor={
            <TouchableOpacity onPress={() => openMenu()}>
              <IonIcons
                name="notifications-circle-outline"
                color="#fff"
                size={40}
              />
            </TouchableOpacity>
          }>
          <Menu.Item title="Notification 1" />
          <Menu.Item title="Notification 2" />
        </Menu>
        <Menu
          statusBarHeight={45}
          visible={visible1}
          onDismiss={() => closeMenu1()}
          anchor={
            <TouchableOpacity onPress={() => openMenu1()}>
              {state.profilepic ? (
                <View
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 50,
                    borderColor: '#fff',
                    borderWidth: 2,
                    padding: 2,
                    marginLeft: 3,
                  }}>
                  <Image
                    source={{uri: state.profilepic}}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'cover',
                      borderRadius: 50,
                    }}
                  />
                </View>
              ) : (
                <EvilIcons name="user" color="#fff" size={45} />
              )}
            </TouchableOpacity>
          }>
          <Menu.Item onPress={() => Logout()} title="Log Out" />
        </Menu>
      </View>
    </View>
  );
};

export default TabNavHeader;
