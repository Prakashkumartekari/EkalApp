import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import AddItemStock from '../../screens/inventory/addItemStock/AddItemStock';
const Stack = createStackNavigator();

const AddItemStockStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={AddItemStock}
        name={NavigationString.AddItemStockScreen}
      />
    </Stack.Navigator>
  );
};

export default AddItemStockStack;
