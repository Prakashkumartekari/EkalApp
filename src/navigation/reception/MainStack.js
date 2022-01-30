import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import {ReceptionDashboard} from '../../components';
import StaffAttendance from '../../screens/reception/staffAttendance/StaffAttendance';
import Complains from '../../screens/reception/complains/Complains';
import AdmissionEnquiry from '../../screens/reception/admissionEnquiry/AdmissionEnquiry';
import visitorControl from '../../screens/reception/visitorControl/VisitorControl';

const Stack = createStackNavigator();

const ReceptionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ReceptionDashboard}
        options={{title: 'Reception'}}
        name={NavigationString.ReceptionDashboard}
      />
      <Stack.Screen
        component={visitorControl}
        name={NavigationString.VisitorControl}
      />
      <Stack.Screen
        component={StaffAttendance}
        name={NavigationString.StaffAttendance}
      />
      <Stack.Screen component={Complains} name={NavigationString.Complains} />
      <Stack.Screen
        component={AdmissionEnquiry}
        name={NavigationString.AdmissionEnquiry}
      />
    </Stack.Navigator>
  );
};

export default ReceptionStack;
