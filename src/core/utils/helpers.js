export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};
