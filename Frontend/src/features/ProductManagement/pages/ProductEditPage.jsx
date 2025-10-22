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
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Save as SaveIcon } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { catalogApi } from '../api/productCatalogApi';
import { useProductCatalog } from '../hooks/useProductCatalog';
import { toast } from 'react-toastify';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, brands } = useProductCatalog();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await catalogApi.getProduct(id);
      reset(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch product');
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await catalogApi.updateProduct(id, data);
      toast.success('Product updated successfully');
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
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="p-6">
      <Box className="flex items-center gap-4 mb-6">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(`/products/${id}`)}
        >
          Back
        </Button>
        <Typography variant="h4" className="font-bold">
          Edit Product
        </Typography>
      </Box>

      <Card>
        <CardContent>
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
                      label="Base Price"
                      type="number"
                      fullWidth
                      error={!!errors.base_price}
                      helperText={errors.base_price?.message}
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
                    >
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="retailer">Retailer</MenuItem>
                      <MenuItem value="both">Both</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Box className="flex gap-3 justify-end">
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/products/${id}`)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    disabled={submitting}
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
