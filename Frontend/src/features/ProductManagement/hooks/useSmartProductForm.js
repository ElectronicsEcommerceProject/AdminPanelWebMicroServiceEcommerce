import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const createApi = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const useSmartProductForm = (initialData = null) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  
  const [formState, setFormState] = useState({
    category: null,
    brand: null,
    product: null,
    variant: null,
    attributeValue: null,
  });

  const [completedSteps, setCompletedSteps] = useState({
    category: false,
    brand: false,
    product: false,
    variant: false,
    attributeValue: false,
  });

  useEffect(() => {
    if (initialData?.dashboardData) {
      setDashboardData(initialData.dashboardData);
      
      if (initialData.selectedItems) {
        const { categories, brands, products, variants } = initialData.selectedItems;
        
        setFormState({
          category: categories || null,
          brand: brands || null,
          product: products || null,
          variant: variants || null,
          attributeValue: null,
        });

        setCompletedSteps({
          category: !!categories,
          brand: !!brands,
          product: !!products,
          variant: !!variants,
          attributeValue: false,
        });
      }
    }
  }, [initialData]);

  const updateField = useCallback((entity, data) => {
    setFormState(prev => ({ ...prev, [entity]: data }));
    setCompletedSteps(prev => ({ ...prev, [entity]: !!data }));
  }, []);

  const canSkipTo = useCallback((step) => {
    const stepOrder = ['category', 'brand', 'product', 'variant', 'attributeValue'];
    const stepIndex = stepOrder.indexOf(step);
    
    for (let i = 0; i < stepIndex; i++) {
      if (!completedSteps[stepOrder[i]]) return false;
    }
    return true;
  }, [completedSteps]);

  const getNextStep = useCallback(() => {
    const steps = ['category', 'brand', 'product', 'variant', 'attributeValue'];
    return steps.find(step => !completedSteps[step]) || 'review';
  }, [completedSteps]);

  const submitForm = useCallback(async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      if (formState.product?.media_file instanceof File) {
        formData.append('media_file', formState.product.media_file);
      }
      if (formState.variant?.variant_media_file instanceof File) {
        formData.append('variant_media_file', formState.variant.variant_media_file);
      }

      const prepareData = (entity, idField) => {
        if (!entity) return {};
        return {
          ...entity,
          [idField]: entity.id || entity[idField],
        };
      };

      const payload = {
        category: prepareData(formState.category, 'category_id'),
        brand: prepareData(formState.brand, 'brand_id'),
        product: prepareData(formState.product, 'product_id'),
        variant: prepareData(formState.variant, 'product_variant_id'),
        attributeValue: prepareData(formState.attributeValue, 'product_attribute_value_id'),
        media: prepareData(formState.product, 'product_media_id'),
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, JSON.stringify(value));
      });

      if (!dashboardData) {
        formData.append('newFormData', JSON.stringify(true));
      }

      const data = await createApi('/api/admin/product-management/dashboard', formData);

      if (data?.success) {
        toast.success('Product created successfully!');
        navigate('/admin');
        return true;
      } else {
        toast.error(data?.message || 'Failed to create product');
        return false;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error?.message || 'Failed to create product');
      return false;
    } finally {
      setLoading(false);
    }
  }, [formState, dashboardData, navigate]);

  const resetForm = useCallback(() => {
    setFormState({
      category: null,
      brand: null,
      product: null,
      variant: null,
      attributeValue: null,
    });
    setCompletedSteps({
      category: false,
      brand: false,
      product: false,
      variant: false,
      attributeValue: false,
    });
  }, []);

  return {
    formState,
    completedSteps,
    loading,
    dashboardData,
    updateField,
    canSkipTo,
    getNextStep,
    submitForm,
    resetForm,
  };
};
