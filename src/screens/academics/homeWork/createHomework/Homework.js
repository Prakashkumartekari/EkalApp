import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationString} from '../../../../../constants/navigationName';

import Styles from '../style';
const Homework = ({navigation}) => {
  return (
    <View style={Styles.root}>
      <View style={Styles.assignment_container}>
        <TouchableOpacity
          style={Styles.touchable}
          onPress={() => navigation.navigate(NavigationString.Homework)}>
          <View style={Styles.touchableCard}>
            <View style={Styles.touchableCard_wrapper}>
              <AntDesign name="form" size={50} color="#fff" />
            </View>
            <Text style={Styles.touchableCard_text}>Create New Homework</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.touchable}
          onPress={() => navigation.navigate(NavigationString.PostedHomework)}>
          <View style={Styles.touchableCard}>
            <View style={Styles.touchableCard_wrapper}>
              <AntDesign name="checksquareo" size={50} color="#fff" />
            </View>
            <Text style={Styles.touchableCard_text}>Posted Homework</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homework;
