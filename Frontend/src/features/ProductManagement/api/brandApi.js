import apiService from '../../../core/api/apiService'; export const getAllBrands = async () = const response = await apiService.get('/api/brands'); return response.data; }; 
