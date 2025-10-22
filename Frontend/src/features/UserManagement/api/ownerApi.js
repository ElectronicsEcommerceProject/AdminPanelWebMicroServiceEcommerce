import apiService from '../../../core/api/apiService';

export const getAllOwners = async () => {
  const response = await apiService.get('/api/owners');
  return response.data;
};
