import apiService from '../../../core/api/apiService'; export const getAllReviews = async () = const response = await apiService.get('/api/reviews'); return response.data; }; 
