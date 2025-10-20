import apiService from '../../../core/api/apiService';

export const getDashboardStats = async () => {
  const response = await apiService.get('/api/dashboard/stats');
  return response.data;
};
