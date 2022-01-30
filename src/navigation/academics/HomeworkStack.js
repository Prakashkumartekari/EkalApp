import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import HomeworkDashboard from '../../screens/academics/homeWork/Dashboard';
import HomeworkSelect from '../../screens/academics/homeWork/createHomework/HomeworkSelect';
import CreateHomework from '../../screens/academics/homeWork/createHomework/CreateHomework';
import PostedSelect from '../../screens/academics/homeWork/postedHomework/PostedSelect';
import Postedhomework from '../../screens/academics/homeWork/postedHomework/Postedhomework';

const Stack = createStackNavigator();
const AssignmentStack = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationString.HomeworkDashboard}>
      <Stack.Screen
        name={NavigationString.HomeworkDashboard}
        component={HomeworkDashboard}
        options={{
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name={NavigationString.Homeworkselect}
        component={HomeworkSelect}
        options={{
          title: 'Create New ',
        }}
      />
      <Stack.Screen
        name={NavigationString.CreateHomework}
        component={CreateHomework}
        options={{
          title: 'Create New ',
        }}
      />
      <Stack.Screen
        name={NavigationString.PostedSelect}
        component={PostedSelect}
        options={{
          title: 'Create New ',
        }}
      />
      <Stack.Screen
        name={NavigationString.PostedHomework}
        component={Postedhomework}
        options={{
          title: 'Posted Homework',
        }}
      />
    </Stack.Navigator>
  );
};

export default AssignmentStack;
