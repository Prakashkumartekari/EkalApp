import {StyleSheet} from 'react-native';
import {primaryColor} from '../src/config.json';
import appTheme from './theme';
const {COLORS, SIZES, hp, wp} = appTheme;
export const globalStyles = StyleSheet.create({
  red: {
    color: 'red',
  },
  Image: {
    height: hp('20%'),
    width: wp('100%'),
  },
  primaryColorbackground: {
    backgroundColor: primaryColor,
  },
  borderRadius: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  inputField: {
    backgroundColor: '#fff',
    marginTop: hp('-0.8%'),
    // height: hp('6.7%'),
    color: '#000000AB',
    fontSize: SIZES.h6,
  },
  inputField2: {
    backgroundColor: '#FFFFFF',
    elevation: SIZES.m3,
    paddingLeft: 20,
    marginVertical: 10,
    borderRadius: SIZES.m3,
    color: '#000',
  },
  inputFieldContainer: {
    elevation: SIZES.m3,
    backgroundColor: '#fff',
    borderRadius: SIZES.m3,
    marginVertical: SIZES.m2,
  },
  selectionFieldContainer: {
    paddingHorizontal: SIZES.m4,
    height: hp('6.9%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectionFieldText: {
    fontSize: SIZES.h6,
    color: '#000000AB',
  },
  selection_container: {
    marginTop: hp('-0.65%'),
    backgroundColor: COLORS.white,
    borderRadius: SIZES.m6,
    elevation: SIZES.m2,
    paddingVertical: SIZES.m3,
    width: '100%',
  },
  selection_Text: {
    textAlign: 'center',
    paddingVertical: SIZES.m1,
    fontSize: SIZES.h4,
    color: '#000000AB',
  },
  selectionItem: {
    backgroundColor: '#f9f9f9',
    marginVertical: SIZES.m1,
    elevation: SIZES.m1,
    borderRadius: SIZES.m5,
    marginHorizontal: SIZES.m4,
  },
  selectitembackground: {
    backgroundColor: primaryColor,
    elevation: SIZES.m2,
  },
  selectitemtext: {
    color: COLORS.white,
  },
});
