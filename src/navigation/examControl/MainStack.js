import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationString} from '../../../constants/navigationName';
import {ExamDashboard} from '../../components';
import QuestionPaper from '../../screens/examControl/questionPaper/QuestionPaper';
import Results from '../../screens/examControl/result/Results';
import TestExam from '../../screens/examControl/testExam/TestExam';
const Stack = createStackNavigator();
const ExamStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ExamDashboard}
        name={NavigationString.Examination}
      />
      <Stack.Screen
        component={QuestionPaper}
        name={NavigationString.QuestionPaper}
      />
      <Stack.Screen component={Results} name={NavigationString.Results} />
      <Stack.Screen component={TestExam} name={NavigationString.Exams} />
    </Stack.Navigator>
  );
};

export default ExamStack;
