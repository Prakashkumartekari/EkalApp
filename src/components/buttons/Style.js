import {StyleSheet, Dimensions} from 'react-native';
import appTheme from '../../../constants/theme';
const {COLORS, SIZES, hp, wp, ALIGN} = appTheme;

const styles = StyleSheet.create({
  txtLabel: {
    color: COLORS.dashcard4,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  btnWrap: {
    width: wp('90%'),
    height: hp('8%'),
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSmallWrap: {
    backgroundColor: COLORS.white,
    width: wp('35%'),
    height: hp('6%'),
    alignItems: ALIGN.align,
    justifyContent: ALIGN.align,
    borderRadius: 5,
    borderWidth: 1,
  },
  btnMedWrap: {
    backgroundColor: COLORS.white,
    width: wp('50%'),
    height: hp('8%'),
    alignItems: ALIGN.align,
    justifyContent: ALIGN.align,
    borderRadius: 10,
    borderWidth: 1,
  },
  btnMedWraps: {
    backgroundColor: COLORS.white,
    width: wp('50%'),
    height: hp('6%'),
    alignItems: ALIGN.align,
    justifyContent: ALIGN.align,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default styles;
