import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import IssueItems from '../../screens/inventory/issueItems/IssueItems';
const Stack = createStackNavigator();
const IssueItemStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={IssueItems}
        name={NavigationString.IssueItemScreen}
      />
    </Stack.Navigator>
  );
};

export default IssueItemStack;
