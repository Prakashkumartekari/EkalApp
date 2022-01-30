import React from 'react';
import {View} from 'react-native';
import appTheme from '../../../../../constants/theme';
import PostedHomeworkCard from '../../../../components/academics/PostedHomeworkCard';

const {SIZES} = appTheme;
const Postedhomework = () => {
  return (
    <View style={{paddingHorizontal: SIZES.m6, marginTop: SIZES.m5}}>
      <PostedHomeworkCard />
      <PostedHomeworkCard />
    </View>
  );
};

export default Postedhomework;
