import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../../api/main';
import {baseUrl} from '../../../src/config.json';
import {clearschoolId} from '../academics/AttendanceReducer';

export const logout = createAsyncThunk('logout', async (res, {dispatch}) => {
  dispatch(clearschoolId());
  await AsyncStorage.clear();
  return;
});

export const authlogin = createAsyncThunk('login', async formdata => {
  try {
    const {data} = await axios.post(`${baseUrl}/api/auth/signin`, formdata);
    if (data) {
      await AsyncStorage.setItem('profile', JSON.stringify({...data}));
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const {data} = err.response;

    if (data.status === 401) return false;
  }
});

export const authSignup = createAsyncThunk(
  'signup',
  async ({serverSendingDataofDirector, serverSendingDataofother, role1}) => {
    try {
      if (role1 === 'Director') {
        await axios.post(
          `${baseUrl}/registration/school`,
          serverSendingDataofDirector,
        );
        return;
      }
      if (role1 === 'Staff') {
        await axios.post(
          `${baseUrl}/registration/staff`,
          serverSendingDataofother,
        );
        return;
      }
      if (role1 === 'Parent') {
        await axios.post(
          `${baseUrl}/registration/parent`,
          serverSendingDataofother,
        );
        return;
      }
    } catch (err) {
      const {data} = err.response;
      return data;
    }
  },
);
export const getstaffSchoolInfo = createAsyncThunk(
  'getstaffschoolinfo',
  async id => {
    try {
      const {data} = await API.get(`/api/school/getSchoolInfoAfterLogin/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      const {data} = err.response;
      console.log(data);
      return data;
    }
  },
);
export const getstaffProfile = createAsyncThunk(
  'getstaffprofile',
  async email => {
    try {
      const {data} = await API.get(`/api/teacher/getTeacherByEmail/${email}`);
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
);

export const updatelogindetail = createAsyncThunk(
  'updatelogindetail',
  async () => {
    try {
      const result = await AsyncStorage.getItem('profile');
      if (result) {
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    modal: false,
    schoolInfo: null,
    staffprofile: null,
    loginDetail: null,
    loginError: false,
    signupError: false,
    modalsuccess: false,
    schoolid: null,
  },
  reducers: {
    closeerror: (state, actions) => {
      state.signupError = false;
    },
    closesuccess: (state, actions) => {
      state.modalsuccess = false;
    },
  },
  extraReducers: {
    [getstaffSchoolInfo.fulfilled]: (state, action) => {
      state.schoolInfo = action.payload;
    },

    [getstaffProfile.pending]: (state, action) => {
      state.modal = true;
    },
    [getstaffProfile.fulfilled]: (state, action) => {
      state.modal = false;
      state.staffprofile = action.payload;
    },
    [getstaffProfile.rejected]: state => {
      state.modal = false;
    },
    [authlogin.pending]: (state, actions) => {
      state.modal = true;
    },

    [authlogin.fulfilled]: (state, actions) => {
      state.modal = false;
      if (!actions.payload) {
        state.loginError = true;
      } else {
        state.loginDetail = actions.payload;
        state.loginError = false;
      }
    },
    [authlogin.rejected]: (state, actions) => {
      state.modal = false;
    },
    [updatelogindetail.fulfilled]: (state, actions) => {
      if (actions.payload) {
        state.loginDetail = JSON.parse(actions.payload);
      }
    },

    [authSignup.pending]: (state, actions) => {
      state.modal = true;
    },

    [authSignup.fulfilled]: (state, actions) => {
      state.modal = false;

      if (actions.payload) {
        state.signupError = actions.payload.message;
      } else {
        state.modalsuccess = true;
        state.signupError = false;
      }
    },
    [authSignup.rejected]: (state, actions) => {
      state.modal = false;
    },
    [logout.fulfilled]: (state, actions) => {
      state.loginDetail = null;
      state.staffprofile = null;
    },
    //     [getschoolid.fulfilled]: (state, actions) => {
    //       state.schoolid = actions.payload;
    //     },
  },
});
export default authSlice.reducer;
export const {closeerror, closesuccess, updateHome} = authSlice.actions;
