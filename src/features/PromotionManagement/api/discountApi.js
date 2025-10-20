import apiService from '../../../core/api/apiService'; export const getDiscountRules = async () = const response = await apiService.get('/api/discount-rules'); return response.data; }; 
