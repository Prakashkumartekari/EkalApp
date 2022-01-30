import {configureStore} from '@reduxjs/toolkit';
import Getupdatestaff from './reducer/humanResources/Getupdatestaff';
import AttendanceReducer from './reducer/academics/AttendanceReducer';
import AuthReducer from './reducer/auth/AuthReducer';
import MobileEmailReducer from './reducer/auth/MobileEmailReducer';
import CommonReducer from './reducer/CommonReducer';
import StaffSlice from './reducer/updateProfile/StaffSlice';
import visitorControl from './reducer/reception/visitorControl';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    MobileEmail: MobileEmailReducer,
    staffprofile: Getupdatestaff,
    AttendanceState: AttendanceReducer,
    CommonState: CommonReducer,
    updateStaff: StaffSlice,
    visitorControlList: visitorControl,
  },
});
