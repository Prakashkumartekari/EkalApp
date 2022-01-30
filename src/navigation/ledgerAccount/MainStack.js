import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import {LedgerDashboard} from '../../components';
import Expenses from '../../screens/ledgerAccounts/expenses/Expenses';
import Collection from '../../screens/ledgerAccounts/collection/Collection';
import Fess from '../../screens/ledgerAccounts/feeStructureCollection/FeesStructureCollection';
import ExpensesStack from './ExpensesStack';
import CollectionStack from './CollectionStack';
import FeesStack from './FeesStack';
const Stack = createStackNavigator();
const LedgerStack = () => {
  return (
    <Stack.Navigator screenOptions={{title: 'Ledgere & Accounts'}}>
      <Stack.Screen
        component={LedgerDashboard}
        name={NavigationString.LedgerDashboard}
      />
      <Stack.Screen
        component={ExpensesStack}
        name={NavigationString.ExpensesStack}
      />
      <Stack.Screen
        component={CollectionStack}
        name={NavigationString.CollectionStack}
      />
      <Stack.Screen component={FeesStack} name={NavigationString.FeesStack} />
    </Stack.Navigator>
  );
};

export default LedgerStack;
