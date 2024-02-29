import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './message/messageSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

// Define RootState type to use throughout your app
export type RootState = ReturnType<typeof store.getState>;
