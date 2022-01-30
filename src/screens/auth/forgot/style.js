import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {SIZES, COLORS, hp, wp} = appTheme;
const Styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.white,
  },
  backbutton: {
    position: 'absolute',
    top: SIZES.m10,
    left: SIZES.m6,
  },
  content_Container: {
    justifyContent: 'center',
    marginTop: SIZES.m1,
    paddingHorizontal: SIZES.m8,
  },
  otptext: {
    fontSize: SIZES.h3,
    marginBottom: SIZES.m2,
  },
  passwordroot: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: wp('26%'),
    position: 'relative',
  },
  passwordbackimage: {
    height: hp('30%'),
    width: hp('30%'),
    position: 'absolute',
    top: hp('-5%'),
  },
  forgotImage: {
    height: hp('20%'),
    width: hp('20%'),
    marginTop: SIZES.m5,
  },
});
export default Styles;
