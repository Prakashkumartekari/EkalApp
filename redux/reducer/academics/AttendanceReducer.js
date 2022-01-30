import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '../../../api/main';
export const getSchoolId = createAsyncThunk('getSchoolId', async res => {
  try {
    if (res.role === 'ROLE_TEACHER') {
      const {data} = await API.get(
        `/api/teacher/getTeacherByEmail/${res.email}`,
      );

      return data;
    } else {
      const {data} = await API.get(`api/school/getSchoolByEmail/${res.email}`);
      return data;
    }
  } catch (err) {
    const {status, data} = err.response;
    console.log(data);
    return {data, status};
  }
});
export const getDropDown = createAsyncThunk('getDropdown', async id => {
  console.log(id);
  try {
    const {data} = await API.get(`/api/misc/getClassDropdown/${id}`);
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log(data);
    return {data, status};
  }
});
export const Gettodayattendance = createAsyncThunk(
  'gettodayattendance',
  async res => {
    try {
      const {data} = await API.put('/api/academic/getTodayAttendance', res);
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(data);
      return {data, status};
    }
  },
);
export const Editattendance = createAsyncThunk(
  'editattendance',
  async attendancedata => {
    try {
      const {data} = await API.put(
        '/api/academic/editAttendance',
        attendancedata,
      );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(data);
      return {data, status};
    }
  },
);
export const HolidayClass = createAsyncThunk(
  'holidayclass',
  async attendancedata => {
    try {
      const {data} = await API.put(
        '/api/academic/markAsHolidayClass',
        attendancedata,
      );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(data);
      return {data, status};
    }
  },
);
export const HolidaySchool = createAsyncThunk(
  'holidayschool',
  async attendancedata => {
    try {
      const {data} = await API.put(
        '/api/academic/markAsHolidaySchool',
        attendancedata,
      );
      return data;
    } catch (err) {
      const {status, data} = err.response;
      console.log(data);
      return {data, status};
    }
  },
);
export const getSubjects = createAsyncThunk('getsubjects', async classDocid => {
  try {
    const {data} = await API.get(
      `/api/schoolMange/getByClassDocId/${classDocid}`,
    );
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log(data);
    return {data, status};
  }
});
export const viewAttendance = createAsyncThunk('viewattendance', async res => {
  try {
    const {data} = await API.put('/api/academic/getAttendanceByDate', res);
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log(data);
    return {data, status};
  }
});

const AttedanceSlice = createSlice({
  name: 'Attendance',
  initialState: {
    SchoolId: null,
    viewAttendance: null,
    SchoolIdmodal: false,
    dropdown: null,
    subjectslist: null,
    dropdownModal: false,
    dropdownError: false,
    todayattendance: null,
    todayattendanceError: false,
    editAttendance: false,
    editAttendanceError: false,
    attendance: false,
    holidayloading: false,
    holidaydata: false,
  },
  reducers: {
    closeDialog: (state, actions) => {
      if (actions.payload === 'edit') {
        state.editAttendance = false;
      }
      if (actions.payload === 'holiday') {
        state.holidaydata = false;
      }
      state.dropdownModal = false;
    },
    updateAttendanceData: (state, actions) => {
      state.attendance = actions.payload;
    },
    clearschoolId: state => {
      state.SchoolId = null;
      console.log('in school id clear', state.SchoolId);
    },
  },
  extraReducers: {
    [getSchoolId.pending]: state => {
      state.SchoolIdmodal = true;
    },
    [getSchoolId.fulfilled]: (state, actions) => {
      const {status} = actions.payload;
      if (status) {
        state.SchoolIdError = true;
        state.SchoolIdmodal = false;
      } else {
        state.SchoolIdmodal = false;
        state.SchoolId = actions.payload;
      }
    },
    [getSchoolId.rejected]: state => {
      state.SchoolIdmodal = false;
    },
    [getDropDown.pending]: state => {
      state.dropdownModal = true;
    },
    [getDropDown.fulfilled]: (state, actions) => {
      const {status} = actions.payload;

      if (status) {
        state.dropdownError = true;
      } else {
        state.dropdown = actions.payload;
      }
      state.dropdownModal = false;
    },
    [getDropDown.rejected]: state => {
      state.dropdownModal = false;
    },
    [getSubjects.pending]: state => {
      state.dropdownModal = true;
    },
    [getSubjects.fulfilled]: (state, actions) => {
      const {status} = actions.payload;
      if (status) {
        state.dropdownError = true;
      } else {
        state.subjectslist = actions.payload;
      }
      state.dropdownModal = false;
    },
    [getSubjects.rejected]: state => {
      state.dropdownModal = false;
    },
    [Gettodayattendance.pending]: state => {
      state.dropdownModal = true;
    },
    [Gettodayattendance.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (status) {
        state.todayattendanceError = true;
      } else {
        state.todayattendance = actions.payload;
      }
      state.dropdownModal = false;
    },
    [Gettodayattendance.rejected]: state => {
      state.dropdownModal = false;
    },
    [HolidayClass.pending]: state => {
      state.holidayloading = true;
    },
    [HolidayClass.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (!status) {
        state.holidaydata = actions.payload;
      }
      state.holidayloading = false;
    },
    [HolidayClass.rejected]: state => {
      state.holidayloading = false;
    },
    [HolidaySchool.pending]: state => {
      state.holidayloading = true;
    },
    [HolidaySchool.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (!status) {
        state.holidaydata = actions.payload;
      }
      state.holidayloading = false;
    },
    [HolidaySchool.rejected]: state => {
      state.holidayloading = false;
    },
    [viewAttendance.pending]: state => {
      state.holidayloading = true;
    },
    [viewAttendance.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (!status) {
        state.viewAttendance = actions.payload;
      }
      state.holidayloading = false;
    },
    [viewAttendance.rejected]: state => {
      state.holidayloading = false;
    },

    [Editattendance.fulfilled]: (state, actions) => {
      const {status, data} = actions.payload;
      if (!status) {
        state.editAttendance = actions.payload;
      } else {
        state.editAttendanceError = data;
      }
    },
  },
});
export default AttedanceSlice.reducer;
export const {closeDialog, updateAttendanceData, clearschoolId} =
  AttedanceSlice.actions;
