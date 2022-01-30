import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {COLORS, SIZES, hp, wp, ALIGN} = appTheme;

const Styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: hp('100%'),
    marginTop: '2%',
  },
  mainWrapTwo: {
    flex: 1,
    backgroundColor: COLORS.dashcard19,
    width: wp('95%'),
    marginTop: '2%',
    paddingBottom: '5%',
    alignSelf: ALIGN.align,
    borderWidth: 2,
    borderColor: COLORS.dashcard19,
    borderRadios: 10,
  },
  mainWrapOne: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: hp('100%'),
    paddingBottom: '5%',
  },
  btnViewWrap: {
    marginTop: '3%',
    borderBottomWidth: 1,
    paddingBottom: '3%',
    marginHorizontal: '7%',
    flexDirection: 'row',
    justifyContent: ALIGN.spaceBetween,
  },
  spaceView: {
    marginTop: '5%',
  },
  btnSubmit: {
    marginTop: '5%',
    justifyContent: ALIGN.align,
    alignSelf: ALIGN.align,
  },
  modalView: {
    margin: 20,
    alignItems: ALIGN.align,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    button: {
      borderRadius: 5,
      padding: 15,
      marginVertical: 5,
    },
    buttonClose: {
      backgroundColor: COLORS.dashcard18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  innerView: {
    width: wp('75%'),
    paddingBottom: '5%',
    paddingTop: '5%',
    backgroundColor: COLORS.dashcard19,
    borderRadius: 20,
  },
  Top: {
    marginTop: '5%',
  },
  Tops: {
    marginTop: '5%',
    marginLeft: '5%',
  },
  drop: {
    width: '90%',
    alignSelf: ALIGN.align,
  },
  admin: {
    color: COLORS.black,
    marginLeft: '4%',
    alignSelf: ALIGN.align,
    fontSize: SIZES.h6,
    fontWeight: '900',
    marginTop: '2%',
  },
  selection_container: {
    marginTop: hp('-0.65%'),
    backgroundColor: COLORS.white,
    borderRadius: SIZES.m1,
    elevation: SIZES.m2,
    paddingVertical: SIZES.m3,
    width: '90%',
    alignSelf: ALIGN.align,
  },
  inputFieldContainer: {
    elevation: SIZES.m3,
    backgroundColor: '#fff',
    borderRadius: SIZES.m3,
    marginVertical: SIZES.m2,
    width: '90%',
    justifyContent: ALIGN.align,
    alignSelf: ALIGN.align,
    borderRadios: 5,
    borderWidth: 1,
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
  cross: {
    position: 'absolute',
    right: 5,
    top: 2,
  },
  txtName: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '4%',
  },
  txtTitleName: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '4%',
  },
  title: {
    alignSelf: ALIGN.align,
    marginRight: '5%',
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default Styles;
