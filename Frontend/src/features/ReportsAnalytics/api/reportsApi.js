import apiService from '../../../core/api/apiService'; export const getReports = async () = const response = await apiService.get('/api/reports'); return response.data; }; 
