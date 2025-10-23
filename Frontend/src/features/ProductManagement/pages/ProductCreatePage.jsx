import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Save as SaveIcon } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useProductCatalog } from '../hooks/useProductCatalog';

const steps = ['Basic Information', 'Pricing & Details', 'Review & Create'];

const ProductCreatePage = () => {
  const navigate = useNavigate();
  const { categories, brands } = useProductCatalog();
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      category_id: '',
      brand_id: '',
      base_price: '',
      target_role: 'both',
    }
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Product created successfully!');
      navigate('/products');
    } catch (error) {
      toast.error('Failed to create product');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
                    placeholder="Enter product name"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
                    placeholder="product-slug-name"
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
                    placeholder="Enter product description"
                  />
                )}
              />
            </Grid>
          </Grid>
        );
      
      case 1:
        return (
          <Grid container spacing={3}>
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
                    label="Base Price (₹)"
                    type="number"
                    fullWidth
                    error={!!errors.base_price}
                    helperText={errors.base_price?.message}
                    placeholder="0.00"
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
          </Grid>
        );
      
      case 2:
        const formData = watch();
        return (
          <Box className="space-y-4">
            <Typography variant="h6" className="font-semibold mb-4">
              Review Product Details
            </Typography>
            
            <Paper className="p-4 border border-gray-200 rounded-lg">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Product Name</Typography>
                  <Typography variant="body1" className="font-semibold">{formData.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Slug</Typography>
                  <Typography variant="body1" className="font-semibold">{formData.slug}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">Description</Typography>
                  <Typography variant="body1" className="font-semibold">{formData.description || 'No description'}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Category</Typography>
                  <Typography variant="body1" className="font-semibold">
                    {categories.find(cat => (cat.id || cat.category_id) === formData.category_id)?.name || 'Not selected'}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Brand</Typography>
                  <Typography variant="body1" className="font-semibold">
                    {brands.find(brand => (brand.id || brand.brand_id) === formData.brand_id)?.name || 'Not selected'}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Base Price</Typography>
                  <Typography variant="body1" className="font-semibold text-green-600">₹{formData.base_price}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Target Role</Typography>
                  <Typography variant="body1" className="font-semibold">{formData.target_role}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      
      default:
        return null;
    }
  };

  return (
    <Box className="p-6">
      <Box className="flex items-center gap-4 mb-6">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/products')}
          className="rounded-lg"
        >
          Back to Products
        </Button>
        <Typography variant="h4" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Create New Product
        </Typography>
      </Box>

      <Card className="rounded-xl shadow-lg">
        <CardContent className="p-6">
          <Stepper activeStep={activeStep} className="mb-8">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStepContent(activeStep)}
            
            <Box className="flex justify-between mt-8">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                className="rounded-lg"
              >
                Back
              </Button>
              
              <Box className="flex gap-2">
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    disabled={submitting}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                  >
                    {submitting ? 'Creating...' : 'Create Product'}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCreatePage;
