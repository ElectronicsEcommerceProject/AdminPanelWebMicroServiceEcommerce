import apiService from '../../../core/api/apiService'; export const getAllPayments = async () = const response = await apiService.get('/api/payments'); return response.data; }; 
