import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import ItemStore from '../../screens/inventory/itemStore/ItemStore';
const Stack = createStackNavigator();

const ItemStoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={ItemStore}
        name={NavigationString.ItemStoreScreen}
      />
    </Stack.Navigator>
  );
};

export default ItemStoreStack;
