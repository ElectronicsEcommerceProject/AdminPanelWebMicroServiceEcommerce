// import apiService from '../../../core/api/apiService'; export const uploadMedia = async (file) = const response = await apiService.post('/api/media', file); return response.data; }; 
