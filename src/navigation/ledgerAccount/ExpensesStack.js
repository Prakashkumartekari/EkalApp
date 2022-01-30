import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import Expenses from '../../screens/ledgerAccounts/expenses/Expenses';

const Stack = createStackNavigator();
const ExpensesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Expenses} name={NavigationString.Expenses} />
    </Stack.Navigator>
  );
};

export default ExpensesStack;
