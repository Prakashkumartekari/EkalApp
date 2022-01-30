import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {SIZES} = appTheme;
const Styles = StyleSheet.create({
  // Styles for Homework Page

  homeworkroot: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SIZES.m5,
    paddingVertical: SIZES.m10,
  },
  homework_container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  homeworkSelector_container: {
    width: '100%',
    marginHorizontal: SIZES.m5,
    marginVertical: SIZES.m10,
  },
  homeworkCalendar_text: {
    fontSize: SIZES.h3,
    color: '#000',
  },
});
export default Styles;
