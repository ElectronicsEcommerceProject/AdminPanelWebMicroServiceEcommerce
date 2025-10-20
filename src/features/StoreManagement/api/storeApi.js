import apiService from '../../../core/api/apiService'; export const getAllStores = async () = const response = await apiService.get('/api/stores'); return response.data; }; 
