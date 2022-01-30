import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import AddItemStack from './AddItemStack';
import AddItemStockStack from './AddItemStockStack';
import IssueItemStack from './IssueItemStack';
import ItemCategoryStack from './ItemCategoryStack';
import ItemStoreStack from './ItemStoreStack';
import ItemSupplierStack from './ItemSupplierStack';
import InventoryDashboard from '../../screens/inventory/Dashboard';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={InventoryDashboard}
        name={NavigationString.InventoryDashboard}
      />
      <Stack.Screen
        component={AddItemStack}
        name={NavigationString.AddItemStack}
      />
      <Stack.Screen
        component={AddItemStockStack}
        name={NavigationString.AddItemStockStack}
      />
      <Stack.Screen
        component={IssueItemStack}
        name={NavigationString.IssueItemStack}
      />
      <Stack.Screen
        component={ItemCategoryStack}
        name={NavigationString.ItemCategoryStack}
      />
      <Stack.Screen
        component={ItemStoreStack}
        name={NavigationString.ItemStoreStack}
      />
      <Stack.Screen
        component={ItemSupplierStack}
        name={NavigationString.ItemSupplierStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
