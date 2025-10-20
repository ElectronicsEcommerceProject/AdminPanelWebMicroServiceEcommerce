import apiService from '../../../core/api/apiService';

export const getAllUsers = async () => {
  const response = await apiService.get('/api/users');
  return response.data;
};

export const createUser = async (userData) => {
  const response = await apiService.post('/api/users', userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await apiService.put(`/api/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await apiService.delete(`/api/users/${id}`);
  return response.data;
};
