import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API from '../../api/main';
export const ImageUpload = createAsyncThunk('ImageUpload', async res => {
  try {
    console.log('in common try');
    const {data} = await API.post('/api/test/uploadFile', res);
    console.log('in common try', data);
    return data;
  } catch (err) {
    const {status, data} = err.response;
    console.log(data);
    return {data, status};
  }
});

const CommonSlice = createSlice({
  name: 'Common',
  initialState: {
    loader: false,
    imageuploadmessage: false,
    imageerror: false,
  },
  reducers: {},
  extraReducers: {
    [ImageUpload.pending]: state => {
      state.loader = true;
    },
    [ImageUpload.fulfilled]: (state, actions) => {
      const {status} = actions.payload;
      if (status) {
        state.imageerror = true;
        state.loader = false;
      } else {
        state.loader = false;
        state.imageuploadmessage = actions.payload;
      }
    },
    [ImageUpload.rejected]: state => {
      state.loader = false;
    },
  },
});
export default CommonSlice.reducer;
export const {} = CommonSlice.actions;
