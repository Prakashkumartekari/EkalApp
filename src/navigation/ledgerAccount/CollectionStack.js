import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import Collection from '../../screens/ledgerAccounts/collection/Collection';
const Stack = createStackNavigator();
const CollectionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Collection} name={NavigationString.Collection} />
    </Stack.Navigator>
  );
};

export default CollectionStack;
