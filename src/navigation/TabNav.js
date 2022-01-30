import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Message from '../screens/communiction/message';
import Events from '../screens/sportsEvents/events';
import {NavigationString} from '../../constants/navigationName';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AttendanceStack from './academics/AttendanceStack';
import AssignmentStack from './academics/HomeworkStack';
import DashboardStack from './DashboardStack';
import {useDispatch, useSelector} from 'react-redux';
import {getstaffProfile} from '../../redux/reducer/auth/AuthReducer';
import {getSchoolId} from '../../redux/reducer/academics/AttendanceReducer';
import LoaderDialog from '../components/Dialog/LoaderDialog';
import UpdateProfile from './updateProfile/MainStack';
const Tab = createBottomTabNavigator();
const TabNav = () => {
  const [confimationState, setConfimationState] = useState({
    schoolConfirmation: true,
  });
  const dispatch = useDispatch();
  const {staffprofile, loginDetail} = useSelector(state => state.auth);

  const {SchoolId, SchoolIdmodal} = useSelector(state => state.AttendanceState);
  useEffect(() => {
    if (
      loginDetail?.roles[0] === 'ROLE_TEACHER' ||
      loginDetail?.roles[0] === 'ROLE_USER'
    ) {
      dispatch(getstaffProfile(loginDetail?.username));
    } else {
      const data = {
        email: loginDetail?.username,
        role: loginDetail?.roles[0],
      };
      dispatch(getSchoolId(data));
    }
  }, [dispatch]);
  useEffect(() => {
    if (
      loginDetail?.roles[0] === 'ROLE_TEACHER' ||
      loginDetail?.roles[0] === 'ROLE_USER'
    ) {
      staffprofile?.list?.map(item => {
        setConfimationState({
          ...confimationState,
          schoolConfirmation: item?.schoolConfirmed,
        });
      });
    } else {
      setConfimationState({
        ...confimationState,
        schoolConfirmation: SchoolId?.list[0].verified,
      });
    }
  }, [staffprofile, SchoolId]);
  return (
    <>
      <LoaderDialog state={SchoolIdmodal} />
      {confimationState.schoolConfirmation ? (
        <Tab.Navigator
          initialRouteName={NavigationString.DashboardStack}
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'blue',
            tabBarStyle: {
              backgroundColor: '#2789FD',
              paddingBottom: 10,
              paddingTop: 4,
              height: 60,
            },
          }}>
          {/* ###   Home Tab Screen start ### */}
          <Tab.Screen
            name={NavigationString.DashboardStack}
            component={DashboardStack}
            options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: ({focused}) => {
                return (
                  <AntDesign
                    name="home"
                    size={30}
                    color={focused ? 'blue' : '#fff'}
                  />
                );
              },
            }}
          />
          {/* ###   Home Tab Screen End ### */}

          {/* ###   Message Tab Screen start ### */}
          <Tab.Screen
            name={NavigationString.Message}
            component={Message}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <AntDesign
                    name="message1"
                    size={30}
                    color={focused ? 'blue' : '#fff'}
                  />
                );
              },
            }}
          />
          {/* ###   Message Tab Screen End ### */}

          {/* ###  Assignment Tab Screen start ### */}
          <Tab.Screen
            name={NavigationString.AssignmentsStack}
            component={AssignmentStack}
            options={{
              title: 'Assignment',
              tabBarIcon: ({focused}) => {
                return (
                  <AntDesign
                    name="profile"
                    size={30}
                    color={focused ? 'blue' : '#fff'}
                  />
                );
              },
            }}
          />
          {/* ###  Assignment Tab Screen End ### */}

          {/* ###  Events Tab Screen Start ### */}
          <Tab.Screen
            name={NavigationString.Events}
            component={Events}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <AntDesign
                    name="calendar"
                    size={30}
                    color={focused ? 'blue' : '#fff'}
                  />
                );
              },
            }}
          />
          {/* ###  Events Tab Screen End ### */}

          {/* ###  Attendance Tab Screen Start ### */}
          <Tab.Screen
            name={NavigationString.AttendanceStack}
            component={AttendanceStack}
            options={{
              title: 'Attendance',
              tabBarIcon: ({focused}) => {
                return (
                  <AntDesign
                    name="bars"
                    size={30}
                    color={focused ? 'blue' : '#fff'}
                  />
                );
              },
            }}
          />
          {/* ###  Attendance Tab Screen End ### */}
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name={NavigationString.DashboardStack}
            component={UpdateProfile}
            options={{
              headerShown: false,
              title: 'Home',
              tabBarStyle: {display: 'none'},
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default TabNav;
