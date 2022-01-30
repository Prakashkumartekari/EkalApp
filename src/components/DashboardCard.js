import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import appTheme from '../../constants/theme';
const {hp, SIZES} = appTheme;
const DashboardCard = ({text, clickfun, icon, color, route}) => {
  return (
    <TouchableOpacity
      onPress={() => clickfun(route)}
      activeOpacity={0.4}
      style={{
        height: hp('16%'),
        minWidth: hp('22%'),
        backgroundColor: color,
        marginHorizontal: SIZES.m3,
        marginVertical: SIZES.m5,
        borderRadius: 10,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: SIZES.m4,
          marginBottom: SIZES.m6,
        }}>
        {icon}
      </View>
      <View style={{width: '100%'}}>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: SIZES.h5,
            marginLeft: 10,
            textTransform: 'capitalize',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({});
