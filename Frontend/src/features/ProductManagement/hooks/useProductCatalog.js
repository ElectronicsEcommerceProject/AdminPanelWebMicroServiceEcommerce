import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { mockData } from '../utils/constants';

export const useProductCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      // Simulate API call with timeout
      setTimeout(() => {
        setCategories(mockData.categories || []);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch categories');
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setBrands(mockData.brands || []);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch brands');
      setLoading(false);
    }
  };

  const fetchProducts = async (params = {}) => {
    try {
      setLoading(true);
      setTimeout(() => {
        let filteredProducts = mockData.products;
        
        if (params.search) {
          filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(params.search.toLowerCase()) ||
            product.category_name.toLowerCase().includes(params.search.toLowerCase()) ||
            product.brand_name.toLowerCase().includes(params.search.toLowerCase())
          );
        }
        
        setProducts(filteredProducts || []);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchProducts();
  }, []);

  return {
    categories,
    brands,
    products,
    loading,
    error,
    refetch: {
      categories: fetchCategories,
      brands: fetchBrands,
      products: fetchProducts,
    },
  };
};
