import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from '../../../src/config.json';
export const authSignup = createAsyncThunk(
  'signup',
  async ({serverSendingDataofDirector, serverSendingDataofother, roles}) => {
    try {
      if (roles === 'Director') {
        await axios.post(
          `${baseUrl}/registration/school`,
          serverSendingDataofDirector,
        );
        return;
      }
      if (roles === 'Staff') {
        await axios.post(
          `${baseUrl}/registration/staff`,
          serverSendingDataofother,
        );
        return;
      }
      if (roles === 'Parent') {
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
export const SendMobileOtp = createAsyncThunk('mobileotp', async mobileno => {
  try {
    const {data} = await axios.post(
      `${baseUrl}/registration/getOtpPhone/${mobileno}`,
    );
    console.log(data);
    return data;
  } catch (err) {
    const {data, status} = err.response;
    console.log(status);
    return {data, status};
  }
});
export const SendEmailOtp = createAsyncThunk('emailotp', async email => {
  try {
    const {data} = await axios.post(
      `${baseUrl}/registration/getOtpEmail/${email}`,
    );
    return data;
  } catch (err) {
    const {status, data} = err.response;
    return {data, status};
  }
});
export const verifyMobileOtp = createAsyncThunk(
  'verifymobileotp',
  async (
    {res, serverSendingDataofDirector, serverSendingDataofother, roles},
    {dispatch},
  ) => {
    try {
      const {data} = await axios.post(
        `${baseUrl}/registration/verifyPhone`,
        res,
      );
      if (data)
        dispatch(
          authSignup({
            serverSendingDataofDirector,
            serverSendingDataofother,
            roles,
          }),
        );

      return data;
    } catch (err) {
      const {status, data} = err.response;

      return {data, status};
    }
  },
);
export const verifyEmailOtp = createAsyncThunk(
  'verifyemailotp',
  async (
    {res, serverSendingDataofDirector, serverSendingDataofother, roles},
    {dispatch},
  ) => {
    try {
      const {data} = await axios.post(
        `${baseUrl}/registration/verifyEmail`,
        res,
      );
      if (data)
        dispatch(
          authSignup({
            serverSendingDataofDirector,
            serverSendingDataofother,
            roles,
          }),
        );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(data);
      return {data, status};
    }
  },
);

const MobileEmailSlice = createSlice({
  name: 'MobileEmail',
  initialState: {
    sendMobileOtp: false,
    sendEmailOtp: false,
    verifyMobile: false,
    verifyEmail: false,
    mobilespinner: false,
    emailspinner: false,
    error: false,
  },
  reducers: {
    closeMobileEmailError: state => {
      state.error = false;
    },
    closeDialog: state => {
      state.sendMobileOtp = false;
      state.sendEmailOtp = false;
    },

    closeerror: state => {
      state.error = false;
    },
  },
  extraReducers: {
    [authSignup.fulfilled]: (state, actions) => {
      state.verifyEmail = false;
      state.verifyMobile = false;
    },
    [SendMobileOtp.pending]: (state, actions) => {
      state.mobilespinner = true;
    },
    [SendMobileOtp.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (status) {
        state.error = data.message;
      } else {
        state.sendMobileOtp = true;
      }
      state.mobilespinner = false;
    },
    [SendMobileOtp.rejected]: (state, actions) => {
      state.mobilespinner = false;
    },
    [SendEmailOtp.pending]: (state, actions) => {
      state.emailspinner = true;
    },
    [SendEmailOtp.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (status) {
        state.error = data.message;
      } else {
        state.sendEmailOtp = true;
      }
      state.emailspinner = false;
    },
    [SendEmailOtp.rejected]: (state, actions) => {
      state.emailspinner = false;
    },
    [verifyMobileOtp.pending]: (state, actions) => {
      state.mobilespinner = true;
    },
    [verifyMobileOtp.fulfilled]: (state, actions) => {
      const {data, status} = actions.payload;
      console.log(data);
      if (status) {
        state.error = data.message;
      } else {
        state.sendMobileOtp = false;
        state.verifyMobile = true;
      }
      state.mobilespinner = false;
    },
    [verifyMobileOtp.rejected]: (state, actions) => {
      state.mobilespinner = false;
    },
    [verifyEmailOtp.pending]: (state, actions) => {
      state.emailspinner = true;
    },
    [verifyEmailOtp.fulfilled]: (state, actions) => {
      const {data, status} = actions.payload;
      if (status) {
        state.error = data.message;
      } else {
        state.SendEmailOtp = false;
        state.verifyEmail = true;
      }
      state.emailspinner = false;
    },
    [verifyEmailOtp.rejected]: (state, actions) => {
      console.log('in rejected');
      state.emailspinner = false;
    },
  },
});
export default MobileEmailSlice.reducer;
export const {closeMobileEmailError, closeDialog, closeerror} =
  MobileEmailSlice.actions;
