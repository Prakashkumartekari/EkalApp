import {StyleSheet, Dimensions} from 'react-native';
import appTheme from '../../../constants/theme';
const {COLORS, SIZES, hp, wp, ALIGN} = appTheme;

const styles = StyleSheet.create({
  txtLabel: {
    fontSize: SIZES.h5,
    color: COLORS.black,
    fontWeight: '800',
  },
  txtLabelTwo: {
    fontSize: SIZES.h5,
    color: COLORS.black,
    fontWeight: '500',
  },
  rowView: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: ALIGN.spaceBetween,
    marginHorizontal: '7%',
    borderBottomWidth: 1,
    paddingBottom: '2%',
  },
  txtInp: {
    color: COLORS.black,
    fontSize: SIZES.h5,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    // marginHorizontal: '5%',
    borderRadius: 5,
    paddingLeft: '4%',
    marginTop: '2%',
    textAlignVertical: 'top',
  },
  addView: {
    marginHorizontal: '5%',
  },
});

export default styles;
