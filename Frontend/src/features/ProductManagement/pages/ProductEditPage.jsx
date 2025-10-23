import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Save as SaveIcon } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useProductCatalog } from '../hooks/useProductCatalog';
import { mockData } from '../utils/constants';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, brands } = useProductCatalog();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [product, setProduct] = useState(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      // Simulate API call with mock data
      setTimeout(() => {
        const foundProduct = mockData.products.find(p => p.product_id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          reset(foundProduct);
        } else {
          toast.error('Product not found');
          navigate('/products');
        }
        setLoading(false);
      }, 500);
    } catch (error) {
      toast.error('Failed to fetch product');
      navigate('/products');
    }
  };

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Product updated successfully!');
      navigate(`/products/${id}`);
    } catch (error) {
      toast.error('Failed to update product');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box className="p-6">
        <Alert severity="error" className="rounded-lg">
          Product not found
        </Alert>
      </Box>
    );
  }

  return (
    <Box className="p-6">
      <Box className="flex items-center gap-4 mb-6">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(`/products/${id}`)}
          className="rounded-lg"
        >
          Back to Details
        </Button>
        <Typography variant="h4" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Edit Product
        </Typography>
      </Box>

      <Card className="rounded-xl shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: 'Product name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Product Name"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      className="rounded-lg"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="slug"
                  control={control}
                  rules={{ required: 'Slug is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Slug"
                      fullWidth
                      error={!!errors.slug}
                      helperText={errors.slug?.message}
                      className="rounded-lg"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Description"
                      fullWidth
                      multiline
                      rows={4}
                      className="rounded-lg"
                      placeholder="Enter product description"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="category_id"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Category"
                      fullWidth
                      error={!!errors.category_id}
                      helperText={errors.category_id?.message}
                      className="rounded-lg"
                    >
                      {categories.map((cat) => (
                        <MenuItem key={cat.id || cat.category_id} value={cat.id || cat.category_id}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="brand_id"
                  control={control}
                  rules={{ required: 'Brand is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Brand"
                      fullWidth
                      error={!!errors.brand_id}
                      helperText={errors.brand_id?.message}
                      className="rounded-lg"
                    >
                      {brands.map((brand) => (
                        <MenuItem key={brand.id || brand.brand_id} value={brand.id || brand.brand_id}>
                          {brand.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="base_price"
                  control={control}
                  rules={{ required: 'Price is required', min: { value: 0, message: 'Price must be positive' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Base Price (₹)"
                      type="number"
                      fullWidth
                      error={!!errors.base_price}
                      helperText={errors.base_price?.message}
                      className="rounded-lg"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="target_role"
                  control={control}
                  rules={{ required: 'Target role is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Target Role"
                      fullWidth
                      error={!!errors.target_role}
                      helperText={errors.target_role?.message}
                      className="rounded-lg"
                    >
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="retailer">Retailer</MenuItem>
                      <MenuItem value="both">Both</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Box className="flex gap-3 justify-end pt-4">
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/products/${id}`)}
                    className="rounded-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    disabled={submitting}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                  >
                    {submitting ? 'Saving...' : 'Save Changes'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductEditPage;
