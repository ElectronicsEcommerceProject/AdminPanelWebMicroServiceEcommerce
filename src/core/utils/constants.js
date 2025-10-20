export const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  RETAILER: 'retailer',
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
