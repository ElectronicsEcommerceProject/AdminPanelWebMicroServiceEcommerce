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
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, Edit as EditIcon } from '@mui/icons-material';
import { catalogApi } from '../api/productCatalogApi';
import { toast } from 'react-toastify';

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
      const response = await catalogApi.getProduct(id);
      setProduct(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch product details');
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
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
          >
            Back
          </Button>
          <Typography variant="h4" className="font-bold">
            Product Details
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/products/edit/${id}`)}
        >
          Edit Product
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4">
                {product.name}
              </Typography>
              
              <Box className="mb-4">
                <Typography variant="body2" color="text.secondary" className="mb-2">
                  Description
                </Typography>
                <Typography variant="body1">
                  {product.description || 'No description available'}
                </Typography>
              </Box>

              <Divider className="my-4" />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Category
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {product.category_name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Brand
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {product.brand_name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Base Price
                  </Typography>
                  <Typography variant="h6" className="font-bold text-green-600">
                    ₹{product.base_price}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Rating
                  </Typography>
                  <Chip
                    label={product.rating_average ? `${product.rating_average} ⭐` : 'No ratings'}
                    color={product.rating_average >= 4 ? 'success' : 'default'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Target Role
                  </Typography>
                  <Chip
                    label={product.target_role}
                    color={product.target_role === 'both' ? 'primary' : 'default'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Slug
                  </Typography>
                  <Typography variant="body1">
                    {product.slug}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="font-bold mb-4">
                Product Information
              </Typography>
              <Box className="space-y-3">
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Product ID
                  </Typography>
                  <Typography variant="body1">
                    {product.id || product.product_id}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Created At
                  </Typography>
                  <Typography variant="body1">
                    {product.created_at ? new Date(product.created_at).toLocaleDateString() : 'N/A'}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Last Updated
                  </Typography>
                  <Typography variant="body1">
                    {product.updated_at ? new Date(product.updated_at).toLocaleDateString() : 'N/A'}
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
