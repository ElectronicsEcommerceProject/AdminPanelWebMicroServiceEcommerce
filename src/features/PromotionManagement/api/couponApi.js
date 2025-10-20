import apiService from '../../../core/api/apiService'; export const getAllCoupons = async () = const response = await apiService.get('/api/coupons'); return response.data; }; 
