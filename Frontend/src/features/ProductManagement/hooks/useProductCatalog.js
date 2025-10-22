import { useState, useEffect } from 'react';
import { catalogApi } from '../api/productCatalogApi';
import { toast } from 'react-toastify';

export const useProductCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await catalogApi.getCategories();
      setCategories(response.data.data || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const response = await catalogApi.getBrands();
      setBrands(response.data.data || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch brands');
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async (params = {}) => {
    try {
      setLoading(true);
      const response = await catalogApi.getProducts(params);
      setProducts(response.data.data || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to fetch products');
    } finally {
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
