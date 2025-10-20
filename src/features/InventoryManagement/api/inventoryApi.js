import apiService from '../../../core/api/apiService'; export const getStockAlerts = async () = const response = await apiService.get('/api/stock-alerts'); return response.data; }; 
