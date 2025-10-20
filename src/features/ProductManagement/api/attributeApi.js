import apiService from '../../../core/api/apiService'; export const getAttributes = async () = const response = await apiService.get('/api/attributes'); return response.data; }; 
