import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import appTheme from '../../../constants/theme';
import ImagePath from '../../../constants/ImagePath';
const {SIZES, COLORS, hp, wp} = appTheme;
const Splash = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{justifyContent: 'center'}}>
        <Image
          source={ImagePath.splashhead}
          resizeMode="stretch"
          style={{height: hp('30%')}}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: hp('7%'),
            letterSpacing: 1,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: COLORS.primary3,
            textAlign: 'center',
            marginTop: SIZES.m4,
          }}>
          Ekalsutra
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: SIZES.h4,
            color: COLORS.black,
            fontWeight: 'bold',
          }}>
          India's Best School Management Portal
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          source={ImagePath.splashbottom}
          resizeMode="stretch"
          style={{width: '100%', height: hp('45%')}}
        />
      </View>
    </View>
  );
};

export default Splash;
