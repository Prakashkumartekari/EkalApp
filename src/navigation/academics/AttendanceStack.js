import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Attendance, DetailAttendace, ViewAttendance} from '../../screens';
import {NavigationString} from '../../../constants/navigationName';
const Stack = createStackNavigator();
const AttendanceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Attendance}
        name={NavigationString.Attendace}
        options={{
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={NavigationString.DetailAttendance}
        component={DetailAttendace}
        options={{
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={NavigationString.ViewAttendance}
        component={ViewAttendance}
        options={{
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={NavigationString.ViewAttendanceByDate}
        component={ViewAttendance}
        options={{
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AttendanceStack;
