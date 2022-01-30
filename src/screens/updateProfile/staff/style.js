import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  // constants
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  fontbold: {
    fontWeight: '600',
    color: '#000',
  },
  topheader: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },

  schoollogoimg: {height: 30, width: 30},
  logotextcontainer: {marginLeft: 20},
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  detailContainer_item: {
    flex: 1,
  },
  detailContainer_itemText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },

  detailContainer_itemActive: {
    borderBottomWidth: 4,
    borderBottomColor: '#2789FD',
  },
  detailContainer_itemTextActive: {
    color: '#2789FD',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    maxWidth: 300,
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  headContent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    maxWidth: 400,
    marginHorizontal: 2,
  },
  headContent_item: {
    borderRightWidth: 1,
    borderRightColor: 'green',
    paddingVertical: 10,
    flex: 1,
    paddingHorizontal: 1,
    justifyContent: 'center',
  },
  headtext: {
    textAlign: 'center',
  },
  // Personal Information
  personal: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  personal_item: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    borderBottomWidth: 1,
  },
  personal_subitem1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    fontSize: 20,
    color: 'green',
    marginVertical: 8,
    fontWeight: '600',
  },
  personal_subitem2: {
    paddingBottom: 5,
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  textinput: {
    backgroundColor: '#fff',
    height: 35,
  },
  text1: {
    fontSize: 17,
  },
  parentheadtext: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    marginVertical: 3,
  },
  personalButton_container: {
    // alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  personalButton: {
    width: 130,
  },
  menusecinput: {
    marginVertical: 5,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',

    justifyContent: 'space-around',
  },
  mobile: {
    paddingHorizontal: 10,
  },
  mobiletext: {
    paddingVertical: 5,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  menusectext: {
    fontSize: 18,
    // width: '100%',
  },
  selection_item1: {
    marginHorizontal: 10,
  },
});
