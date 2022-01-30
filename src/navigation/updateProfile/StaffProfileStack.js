import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import PersonalDetail from '../../screens/updateProfile/staff/PersonalDetail';
import BankDetail from '../../screens/updateProfile/staff/BankDetail';
import ParentDetail from '../../screens/updateProfile/staff/ParentDetail';
import ExperienceDetail from '../../screens/updateProfile/staff/ExperienceDetail';
import AddressDetail from '../../screens/updateProfile/staff/AddressDetail';
import Ok from '../../screens/updateProfile/staff/Ok';
import StaffHeader from '../../components/StaffHeader';
import {useSelector} from 'react-redux';
import RequestSchool from '../../screens/updateProfile/staff/RequestSchool';
const Stack = createStackNavigator();
const StaffProfileStack = () => {
  const {ok} = useSelector(state => state.updateStaff);
  const {staffprofile} = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{header: () => (!ok ? <StaffHeader /> : null)}}>
      {staffprofile?.list[0].profilePic &&
      !staffprofile?.list[0].schoolConfirmed ? (
        <Stack.Screen
          component={RequestSchool}
          name={NavigationString.RequestSchool}
        />
      ) : (
        <>
          <Stack.Screen component={Ok} name={NavigationString.OkStaff} />
          <Stack.Screen
            component={PersonalDetail}
            name={NavigationString.PersonalDetail}
          />
          <Stack.Screen
            component={ParentDetail}
            name={NavigationString.ParenDetail}
          />
          <Stack.Screen
            component={AddressDetail}
            name={NavigationString.AddressDetail}
          />
          <Stack.Screen
            component={ExperienceDetail}
            name={NavigationString.ExperienceDetail}
          />
          <Stack.Screen
            component={BankDetail}
            name={NavigationString.BankDetail}
          />
          <Stack.Screen
            component={RequestSchool}
            name={NavigationString.RequestSchool2}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StaffProfileStack;
