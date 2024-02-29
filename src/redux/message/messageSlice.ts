import {createSlice} from '@reduxjs/toolkit';
import initialState from './initalState';

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessageData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setMessageData} = messageSlice.actions;

export default messageSlice.reducer;
