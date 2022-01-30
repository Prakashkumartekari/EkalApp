import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {COLORS, SIZES, hp, wp} = appTheme;
const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  box: {
    flex: 1,
  },
  Image: {
    height: hp('27%'),
    width: wp('100%'),
  },
  loginConatainer: {},
  content_container: {
    flex: 2,
    justifyContent: 'flex-start',
    marginHorizontal: SIZES.m8,
    marginTop: SIZES.m5,
  },
  signintext_container: {
    alignItems: 'center',
  },
  signintext: {
    fontSize: hp('3%'),
    color: '#363232',
    marginBottom: SIZES.m7,
  },
  forgotpasswordContainer: {
    alignItems: 'flex-end',
    marginVertical: SIZES.m2,
  },
  button: {
    marginRight: SIZES.m1,
    marginVertical: SIZES.m1,
    paddingHorizontal: SIZES.m2,
    elevation: 30,
  },
  forgottext: {
    fontSize: SIZES.h3,
  },
  loginerror: {
    color: 'red',
    textAlign: 'center',
    marginBottom: SIZES.m1,
  },
  linktext: {
    color: COLORS.black,
  },
  errorText: {
    color: 'red',
    marginLeft: SIZES.m2,
  },
  notregisterbutton: {
    marginTop: SIZES.m8,
    fontSize: SIZES.h4,
  },
  middleimage: {
    position: 'absolute',
    top: hp('-2%'),
    height: hp('45%'),
    width: hp('25%'),
  },
});
export default Styles;
