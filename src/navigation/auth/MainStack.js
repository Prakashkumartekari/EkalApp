import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import Forgot from '../../screens/auth/forgot';
import Login from '../../screens/auth/login';
import Signup from '../../screens/auth/signup';
const Stack = createStackNavigator();
const AuthStackNav = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={NavigationString.Login}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Login',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTintColor: '#fff',
        }}
        name={NavigationString.Login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={NavigationString.Signup}
        component={Signup}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={NavigationString.Forgot}
        component={Forgot}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
