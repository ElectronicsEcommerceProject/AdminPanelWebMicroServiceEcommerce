import apiService from '../../../core/api/apiService';

export const getBanners = async () => {
  const response = await apiService.get('/api/banners');
  return response.data;
};

export const createBanner = async (bannerData) => {
  const response = await apiService.post('/api/banners', bannerData);
  return response.data;
};

export const updateBanner = async (id, bannerData) => {
  const response = await apiService.put(`/api/banners/${id}`, bannerData);
  return response.data;
};

export const deleteBanner = async (id) => {
  const response = await apiService.delete(`/api/banners/${id}`);
  return response.data;
};
