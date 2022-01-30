import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {SIZES, COLORS, hp, wp} = appTheme;
export const Styles = StyleSheet.create({
  //Contstant
  red: {
    color: 'red',
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backbutton: {
    position: 'absolute',
    top: SIZES.m7,
    left: SIZES.m7,
  },
  content_container: {
    marginHorizontal: SIZES.m8,
    justifyContent: 'flex-start',
  },
  content_container2: {
    marginBottom: hp('5.4%'),
  },
  header: {
    color: '#000',
    fontSize: SIZES.h3,
    // textAlign: 'center',
    marginVertical: SIZES.m7,
  },
  checkboaxbutton: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  button: {
    elevation: SIZES.m5,
    width: hp('13%'),
    marginTop: SIZES.m4,
  },
  selectedText: {
    marginHorizontal: SIZES.m3,
  },
  Image: {
    height: hp('17%'),
    width: wp('100%'),
  },
  signupError: {
    color: 'red',
    fontSize: SIZES.h3,
  },
});
