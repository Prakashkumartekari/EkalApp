import {StyleSheet} from 'react-native';
import appTheme from '../../../../constants/theme';
const {SIZES, COLORS} = appTheme;
export const Styles = StyleSheet.create({
  // Styles for Attendace Page
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.m10,
    paddingHorizontal: SIZES.m5,
  },
  attendance_container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  attendanceCalendar_text: {
    fontSize: SIZES.h3,
    color: COLORS.black,
  },
  attendanceSelection_container: {
    width: '100%',
    marginHorizontal: SIZES.m5,
    marginVertical: SIZES.m10,
  },
  holiday_Button: {
    paddingVertical: SIZES.m2,
    elevation: 10,
  },
  holiday_Button2: {
    paddingVertical: SIZES.m2,
  },
  holiday_Button_label: {
    color: COLORS.white,
  },
  holiday_Button_label2: {
    color: COLORS.black,
    opacity: 0.2,
  },
  viewandtakeattendance_container: {
    flexDirection: 'row',
    marginVertical: SIZES.m3,
  },
  viewButton: {
    paddingVertical: SIZES.m2,
    elevation: 10,
  },

  viewButton_label: {
    color: '#5F5252',
  },

  takeButton: {
    paddingVertical: SIZES.m2,
    elevation: 10,
  },
  takeButton2: {
    paddingVertical: SIZES.m2,
  },
  takeButton_label: {
    color: COLORS.white,
  },
  takeButton_label2: {
    color: COLORS.black,
    opacity: 0.2,
  },
});
