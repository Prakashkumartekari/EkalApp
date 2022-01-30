import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import ItemStore from '../../screens/inventory/itemStore/ItemStore';
import ItemSupplier from '../../screens/inventory/itemSupplier/ItemSupplier';
const Stack = createStackNavigator();

const ItemSupplierStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={ItemSupplier}
        name={NavigationString.ItemSupplierScreen}
      />
    </Stack.Navigator>
  );
};

export default ItemSupplierStack;
