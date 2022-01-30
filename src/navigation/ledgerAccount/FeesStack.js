import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import Fees from '../../screens/ledgerAccounts/feeStructureCollection/FeesStructureCollection';
const Stack = createStackNavigator();
const FeesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Fees} name={NavigationString.Fees} />
    </Stack.Navigator>
  );
};

export default FeesStack;
