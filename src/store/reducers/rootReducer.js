import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';
import productReducer from '../slices/productSlice';
import orderReducer from '../slices/orderSlice';
import notificationReducer from '../slices/notificationSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  notification: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
