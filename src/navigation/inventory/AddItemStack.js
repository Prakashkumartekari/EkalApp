import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import AddItem from '../../screens/inventory/addItem/AddItem';
const Stack = createStackNavigator();

const AddItemStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={AddItem} name={NavigationString.AddItemScreen} />
    </Stack.Navigator>
  );
};

export default AddItemStack;
