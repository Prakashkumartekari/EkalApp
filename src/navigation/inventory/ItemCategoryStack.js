import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import ItemCategory from '../../screens/inventory/itemCategory/ItemCategory';
const Stack = createStackNavigator();

const ItemCategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={ItemCategory}
        name={NavigationString.ItemCategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default ItemCategoryStack;
