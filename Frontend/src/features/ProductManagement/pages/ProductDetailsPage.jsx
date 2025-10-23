import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  CircularProgress,
  Divider,
  Rating,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Edit as EditIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { mockData } from '../utils/constants';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
        } else {
          toast.error('Product not found');
          navigate('/products');
        }
        setLoading(false);
      }, 500);
    } catch (error) {
      toast.error('Failed to fetch product details');
      navigate('/products');
    }
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!product) return null;

  return (
    <Box className="p-6">
      <Box className="flex justify-between items-center mb-6">
        <Box className="flex items-center gap-4">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/products')}
            className="rounded-lg"
          >
            Back to Products
          </Button>
          <Typography variant="h4" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Product Details
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/products/edit/${id}`)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
        >
          Edit Product
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-6">
              <Typography variant="h5" className="font-bold mb-4 text-gray-800">
                {product.name}
              </Typography>
              
              <Box className="mb-6">
                <Typography variant="body2" color="text.secondary" className="mb-2 font-semibold">
                  Description
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  {product.description || 'No description available'}
                </Typography>
              </Box>

              <Divider className="my-6" />

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Category
                  </Typography>
                  <Chip 
                    label={product.category_name} 
                    color="primary" 
                    variant="outlined"
                    className="mt-1 font-semibold"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Brand
                  </Typography>
                  <Chip 
                    label={product.brand_name} 
                    color="secondary" 
                    variant="outlined"
                    className="mt-1 font-semibold"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Base Price
                  </Typography>
                  <Typography variant="h6" className="font-bold text-green-600 mt-1">
                    ₹{product.base_price}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Rating
                  </Typography>
                  <Box className="flex items-center gap-2 mt-1">
                    <Rating value={product.rating_average} precision={0.1} readOnly />
                    <Typography variant="body1" className="font-semibold">
                      {product.rating_average} ⭐
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Target Role
                  </Typography>
                  <Chip
                    label={product.target_role}
                    color={product.target_role === 'both' ? 'primary' : 'default'}
                    className="mt-1 font-semibold"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Slug
                  </Typography>
                  <Typography variant="body1" className="mt-1 font-mono text-gray-600">
                    {product.slug}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-6">
              <Typography variant="h6" className="font-bold mb-4 text-gray-800">
                Product Information
              </Typography>
              <Box className="space-y-4">
                <Box>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Product ID
                  </Typography>
                  <Typography variant="body1" className="font-mono text-gray-600">
                    {product.product_id}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Created At
                  </Typography>
                  <Typography variant="body1">
                    {product.created_at ? new Date(product.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'N/A'}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" className="font-semibold">
                    Last Updated
                  </Typography>
                  <Typography variant="body1">
                    {product.updated_at ? new Date(product.updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'N/A'}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailsPage;
