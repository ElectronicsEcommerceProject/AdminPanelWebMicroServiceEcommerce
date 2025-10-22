import apiService from '../../../core/api/apiService'; export const getSalesReport = async () = const response = await apiService.get('/api/analytics/sales'); return response.data; }; 
