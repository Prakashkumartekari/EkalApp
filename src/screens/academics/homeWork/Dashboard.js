import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationString} from '../../../../constants/navigationName';
import appTheme from '../../../../constants/theme';
const {SIZES} = appTheme;
const HomeworkDashboard = ({navigation}) => {
  return (
    <View style={Styles.root}>
      <View style={Styles.assignment_container}>
        <TouchableOpacity
          style={Styles.touchable}
          onPress={() => navigation.navigate(NavigationString.Homeworkselect)}>
          <View style={Styles.touchableCard}>
            <View style={Styles.touchableCard_wrapper}>
              <AntDesign name="form" size={50} color="#fff" />
            </View>
            <Text style={Styles.touchableCard_text}>Create New Homework</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.touchable}
          onPress={() => navigation.navigate(NavigationString.PostedSelect)}>
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

export default HomeworkDashboard;
const Styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  assignment_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: SIZES.w100,
    marginTop: SIZES.m10,
  },
  touchable: {
    flex: 1,
  },
  touchableCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: SIZES.m4,
    elevation: 5,
    borderRadius: SIZES.m4,
    marginHorizontal: SIZES.m5,
  },
  touchableCard_wrapper: {
    backgroundColor: '#0080FF',
    padding: SIZES.m5,
    borderRadius: SIZES.m25,
  },
  touchableCard_text: {
    fontSize: SIZES.h3,
    textAlign: 'center',
    color: '#000',
  },
});
