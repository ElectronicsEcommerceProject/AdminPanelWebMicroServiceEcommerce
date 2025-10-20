import { showToast } from '../components/Toast';

export const handleApiError = (error) => {
  const message = error.response?.data?.message || error.message || 'An error occurred';
  showToast.error(message);
  return message;
};
