import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../../api/main';

export const visitorControlFun = createAsyncThunk('visitorCtrl', async formdata => {
  // console.log('%%%%%%%%%%%%%% ', formdata);
  try {
    const { data } = await API.post(
      '/api/teacher/putEntry',
      formdata,
    );
    if (data) {
      console.log("DATA ", data);
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const getVisitorLog = createAsyncThunk('getVisitor', async () => {
  let id = '615adc9f89354e6964ce25d9'
  try {
    const { data } = await API.get(
      `/api/teacher/getVisitorLogs/${id}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const getClassDropdown = createAsyncThunk('getClassDropdown', async (id) => {
  // let id = '61e0f9d5fd112a528eff66d3'
  try {
    const { data } = await API.get(
      `/api/misc/getClassDropdown/${id}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const getStaffById = createAsyncThunk('getStaffById', async () => {
  let id = '61e115f3c81b5a5c6d7cf23c'
  try {
    const { data } = await API.get(
      `/api/schoolMange/getAllDepartments/${id}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const getAllDepartment = createAsyncThunk('getAllDepartment', async (id) => {
  // let id = '61e0f9d5fd112a528eff66d3'
  try {
    const { data } = await API.get(
      `/api/teacher/getStaffByDepartmentId/${id}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const getStaffByEmail = createAsyncThunk('getStaffByEmail', async () => {
  let email = 'sushil@gmail.com'
  try {
    const { data } = await API.get(
      `/api/teacher/getTeacherByEmail/${email}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

export const putExit = createAsyncThunk('putExit', async () => {
  let id = '6166e17f17cc704161790860'
  try {
    const { data } = await API.put(
      `/api/teacher/putExit/${id}`
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    const { data } = err.response;
    if (data.status === 401) return false;
  }
});

const visitorControlSlice = createSlice({
  name: 'visitorControl',
  initialState: {
    modal: false,
    visitor: [],
    getVisitor: [],
    getClass: [],
    getAllDpt: [],
    getStaff: {},
    getStaffID: {},
    msg: '',
  },

  reducers: {

  },

  extraReducers: {
    [visitorControlFun.pending]: (state, action) => {
      state.modal = true;
    },
    [visitorControlFun.fulfilled]: (state, action) => {
      state.modal = false;
      state.visitor = action.payload;
    },
    [getVisitorLog.fulfilled]: (state, action) => {
      state.modal = false;
      state.getVisitor = action.payload
    },
    [getClassDropdown.fulfilled]: (state, action) => {
      state.modal = false;
      state.getClass = action.payload
    },
    [getAllDepartment.fulfilled]: (state, action) => {
      state.modal = false;
      state.getAllDpt = action.payload
    },
    [putExit.fulfilled]: (state, action) => {
      state.modal = false;
      console.log("Message ");
      state.msg = action.payload
    },
    [getStaffByEmail.fulfilled]: (state, action) => {
      state.modal = false;
      state.getStaff = action.payload
    },
    [getStaffById.fulfilled]: (state, action) => {
      state.modal = false;
      state.getStaffID = action.payload
    },
    [visitorControlFun.rejected]: state => {
      console.log('in rejected');
      state.modal = false;
    },
  },
});

export default visitorControlSlice.reducer;
export const { } = visitorControlSlice.actions;
