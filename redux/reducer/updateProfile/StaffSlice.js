import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '../../../api/main';

export const updateStaffProfile = createAsyncThunk('update', async res => {
  console.log('in redux update', res);
  try {
    const {data} = await API.put('/api/teacher/updateStaffProfile', res);
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log(' update profile redux error', data);
    return {data, status};
  }
});
export const pendingrequestToschool = createAsyncThunk(
  'pendingrequestToschool',
  async res => {
    try {
      const {data} = await API.get(
        `/api/teacher/getPendingRequestToSchool/${res}`,
      );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(' pending request redux error', data);
      return {data, status};
    }
  },
);
export const getSchoolInfoByCode = createAsyncThunk(
  'getSchoolInfoByCode',
  async res => {
    try {
      const {data} = await API.get(`/api/school/getSchoolInfoByCode/${res}`);
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log('school info code redux error', data);
      return {data, status};
    }
  },
);
export const requestSchool = createAsyncThunk('requestSchool', async res => {
  try {
    const {data} = await API.post('/api/teacher/requestSchool', res);
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log('request school redux error', data);
    return {data, status};
  }
});
export const withdrawRequest = createAsyncThunk(
  'withdrawRequest',
  async res => {
    try {
      const {data} = await API.put(
        `/api/teacher/updateSchoolRequest/${res}/WITHDRAW`,
      );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log('with draw redux error', data);
      return {data, status};
    }
  },
);
const StaffSlice = createSlice({
  name: 'updatestaff',
  initialState: {
    pendingrequest: false,
    SchoolInfoByCode: false,
    schoolRequest: false,
    requestWithdraw: false,
    updateStaffProfileMessage: null,
    personalDetail: '',
    parentDetail: '',
    experienceDetail: '',
    addressDetail: '',
    ok: true,
    personal: false,
    parent: false,
    address: false,
    experience: false,
    bank: false,
    loader: false,
  },
  reducers: {
    updatingstaffDetail: (state, actions) => {
      if (actions.payload.name === 'ok') {
        state.personal = true;
        state.ok = false;
      }
      if (actions.payload.name === 'personal') {
        state.personalDetail = actions.payload.data;
        state.personal = false;
        state.parent = true;
      }
      if (actions.payload.name === 'parent') {
        state.parentDetail = actions.payload.data;
        state.parent = false;
        state.address = true;
      }
      if (actions.payload.name === 'address') {
        state.addressDetail = actions.payload.data;
        state.address = false;
        state.experience = true;
      }
      if (actions.payload.name === 'experience') {
        state.experienceDetail = actions.payload.data;
        (state.experience = false), (state.bank = true);
      }
    },
  },
  extraReducers: {
    [updateStaffProfile.pending]: state => {
      state.loader = true;
    },
    [updateStaffProfile.fulfilled]: (state, action) => {
      state.loader = false;
      if (!action.payload.status) {
        state.updateStaffProfileMessage = action.payload;
        if (action.payload.message === 'Updated') {
          state.ok = false;
        }
      }
    },
    [updateStaffProfile.rejected]: (state, action) => {
      state.loader = false;
    },
    [pendingrequestToschool.pending]: state => {
      state.loader = true;
    },
    [pendingrequestToschool.fulfilled]: (state, action) => {
      state.loader = false;
      if (action.payload.status) {
        state.pendingrequest = action.payload.data;
      } else {
        state.pendingrequest = action.payload;
      }
    },
    [pendingrequestToschool.rejected]: (state, action) => {
      state.loader = false;
    },
    [getSchoolInfoByCode.pending]: state => {
      state.loader = true;
    },
    [getSchoolInfoByCode.fulfilled]: (state, action) => {
      state.loader = false;
      if (!action.payload.status) {
        state.SchoolInfoByCode = action.payload;
      }
    },
    [getSchoolInfoByCode.rejected]: (state, action) => {
      state.loader = false;
    },
    [requestSchool.pending]: state => {
      state.loader = true;
    },
    [requestSchool.fulfilled]: (state, action) => {
      state.loader = false;
      if (!action.payload.status) {
        state.schoolRequest = action.payload;
      }
    },
    [requestSchool.rejected]: (state, action) => {
      state.loader = false;
    },
    [withdrawRequest.pending]: state => {
      state.loader = true;
    },
    [withdrawRequest.fulfilled]: (state, action) => {
      state.loader = false;
      if (!action.payload.status) {
        state.requestWithdraw = action.payload;
      }
    },
    [withdrawRequest.rejected]: (state, action) => {
      state.loader = false;
    },
  },
});
export default StaffSlice.reducer;
export const {updatingstaffDetail} = StaffSlice.actions;
