import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../core/auth/authSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export default store;
