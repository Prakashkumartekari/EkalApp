import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const DirectorProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen component={Direc} name={NavigationString.Dashboard} />
      <Stack.Screen component={ExamStack} name={NavigationString.ExamStack} /> */}
    </Stack.Navigator>
  );
};

export default DirectorProfileStack;
