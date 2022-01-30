import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../api/main';
export const updatestaffProfileSlice = createAsyncThunk(
  'staffupdateprofile',
  async ({email, data}) => {
    try {
      const {data} = await API.put(
        `/api/teacher/updateProfile?emailAddress=${email}`,
        data,
      );
    } catch (error) {
      console.log(error);
    }
  },
);

const Profile = createSlice({
  name: 'staffprofile',
  initialState: {
    staffprofile: {},
    staffmodal: false,
    successfull: false,
  },
  reducers: {},
  extraReducers: {
    [updatestaffProfileSlice.pending]: (state, action) => {
      state.staffmodal = true;
    },
    [updatestaffProfileSlice.fulfilled]: (state, action) => {
      state.staffmodal = false;
      state.successfull = true;
    },
    [updatestaffProfileSlice.pending]: (state, action) => {
      state.staffmodal = false;
    },
  },
});
export default Profile.reducer;
export const {} = Profile.actions;
