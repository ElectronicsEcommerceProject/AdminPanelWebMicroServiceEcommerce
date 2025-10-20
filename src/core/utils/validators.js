export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

export const isValidPhone = (phone) => {
  return /^[0-9]{10}$/.test(phone);
};
