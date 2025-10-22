// import axios from 'axios';

const mockData = {
  categories: [
    { id: 1, category_id: 1, name: 'Electronics', slug: 'electronics', target_role: 'both' },
    { id: 2, category_id: 2, name: 'Accessories', slug: 'accessories', target_role: 'customer' },
    { id: 3, category_id: 3, name: 'Mobile Phones', slug: 'mobile-phones', target_role: 'both' },
  ],
  brands: [
    { id: 1, brand_id: 1, name: 'Samsung', slug: 'samsung' },
    { id: 2, brand_id: 2, name: 'Apple', slug: 'apple' },
    { id: 3, brand_id: 3, name: 'OnePlus', slug: 'oneplus' },
  ],
  products: [
    { id: 1, product_id: 1, name: 'Galaxy S23', slug: 'galaxy-s23', description: 'Flagship phone', base_price: 79999, rating_average: 4.5, category_name: 'Mobile Phones', brand_name: 'Samsung', category_id: 3, brand_id: 1, target_role: 'both', created_at: '2024-01-01', updated_at: '2024-01-15' },
    { id: 2, product_id: 2, name: 'iPhone 15', slug: 'iphone-15', description: 'Latest iPhone', base_price: 79999, rating_average: 4.8, category_name: 'Mobile Phones', brand_name: 'Apple', category_id: 3, brand_id: 2, target_role: 'both', created_at: '2024-01-05', updated_at: '2024-01-20' },
    { id: 3, product_id: 3, name: 'OnePlus 11', slug: 'oneplus-11', description: 'Flagship killer', base_price: 56999, rating_average: 4.3, category_name: 'Mobile Phones', brand_name: 'OnePlus', category_id: 3, brand_id: 3, target_role: 'both', created_at: '2024-01-10', updated_at: '2024-01-25' },
    { id: 4, product_id: 4, name: 'AirPods Pro', slug: 'airpods-pro', description: 'Wireless earbuds', base_price: 24900, rating_average: 4.7, category_name: 'Accessories', brand_name: 'Apple', category_id: 2, brand_id: 2, target_role: 'customer', created_at: '2024-01-12', updated_at: '2024-01-28' },
  ],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const catalogApi = {
  getCategories: async () => {
    await delay(500);
    return { data: { data: mockData.categories } };
  },
  createCategory: async (data) => {
    await delay(500);
    const newCat = { ...data, id: Date.now(), category_id: Date.now() };
    mockData.categories.push(newCat);
    return { data: { data: newCat } };
  },
  updateCategory: async (id, data) => {
    await delay(500);
    const index = mockData.categories.findIndex(c => c.id == id || c.category_id == id);
    if (index !== -1) mockData.categories[index] = { ...mockData.categories[index], ...data };
    return { data: { data: mockData.categories[index] } };
  },
  deleteCategory: async (id) => {
    await delay(500);
    mockData.categories = mockData.categories.filter(c => c.id != id && c.category_id != id);
    return { data: { success: true } };
  },

  getBrands: async () => {
    await delay(500);
    return { data: { data: mockData.brands } };
  },
  createBrand: async (data) => {
    await delay(500);
    const newBrand = { ...data, id: Date.now(), brand_id: Date.now() };
    mockData.brands.push(newBrand);
    return { data: { data: newBrand } };
  },
  updateBrand: async (id, data) => {
    await delay(500);
    const index = mockData.brands.findIndex(b => b.id == id || b.brand_id == id);
    if (index !== -1) mockData.brands[index] = { ...mockData.brands[index], ...data };
    return { data: { data: mockData.brands[index] } };
  },
  deleteBrand: async (id) => {
    await delay(500);
    mockData.brands = mockData.brands.filter(b => b.id != id && b.brand_id != id);
    return { data: { success: true } };
  },

  getProducts: async (params) => {
    await delay(500);
    let filtered = [...mockData.products];
    if (params?.search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(params.search.toLowerCase()));
    }
    return { data: { data: filtered } };
  },
  getProduct: async (id) => {
    await delay(500);
    const product = mockData.products.find(p => p.id == id || p.product_id == id);
    return { data: { data: product } };
  },
  createProduct: async (data) => {
    await delay(500);
    const newProduct = { ...data, id: Date.now(), product_id: Date.now(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
    mockData.products.push(newProduct);
    return { data: { data: newProduct } };
  },
  updateProduct: async (id, data) => {
    await delay(500);
    const index = mockData.products.findIndex(p => p.id == id || p.product_id == id);
    if (index !== -1) mockData.products[index] = { ...mockData.products[index], ...data, updated_at: new Date().toISOString() };
    return { data: { data: mockData.products[index] } };
  },
  deleteProduct: async (id) => {
    await delay(500);
    mockData.products = mockData.products.filter(p => p.id != id && p.product_id != id);
    return { data: { success: true } };
  },

  getVariants: async (productId) => {
    await delay(500);
    return { data: { data: [] } };
  },
  createVariant: async (productId, data) => {
    await delay(500);
    return { data: { data: { ...data, id: Date.now() } } };
  },
  updateVariant: async (productId, variantId, data) => {
    await delay(500);
    return { data: { data: { ...data, id: variantId } } };
  },
  deleteVariant: async (productId, variantId) => {
    await delay(500);
    return { data: { success: true } };
  },

  getAttributes: async () => {
    await delay(500);
    return { data: { data: [] } };
  },
  createAttribute: async (data) => {
    await delay(500);
    return { data: { data: { ...data, id: Date.now() } } };
  },
  
  uploadMedia: async (formData) => {
    await delay(500);
    return { data: { data: { url: 'https://via.placeholder.com/300' } } };
  },
};

export default catalogApi;
