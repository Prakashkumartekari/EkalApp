import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StaffProfileStack from './StaffProfileStack';
import {NavigationString} from '../../../constants/navigationName';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={StaffProfileStack}
        name={NavigationString.StaffStack}
      />
      <Stack.Screen
        component={StaffProfileStack}
        name={NavigationString.DirectorStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
