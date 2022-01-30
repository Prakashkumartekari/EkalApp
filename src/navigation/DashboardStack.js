import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../constants/navigationName';
import Dashboard from '../screens/Dashboard';
import ExamStack from './examControl/MainStack';
import ReceptionStack from './reception/MainStack';
import LedgerStack from './ledgerAccount/MainStack';
import InventoryMainStack from './inventory/MainStack';
const Stack = createStackNavigator();
const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Dashboard} name={NavigationString.Dashboard} />
      <Stack.Screen component={ExamStack} name={NavigationString.ExamStack} />
      <Stack.Screen
        component={ReceptionStack}
        name={NavigationString.ReceptionStack}
      />
      <Stack.Screen
        component={LedgerStack}
        name={NavigationString.LedgerStack}
      />
      <Stack.Screen
        component={InventoryMainStack}
        name={NavigationString.inventoryMainStack}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
