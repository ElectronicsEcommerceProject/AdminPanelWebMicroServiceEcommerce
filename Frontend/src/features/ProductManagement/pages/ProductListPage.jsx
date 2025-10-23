import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { mockData } from '../utils/constants';

const ProductListPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchProducts();
  }, [page, pageSize, search]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Simulate API call with mock data
      setTimeout(() => {
        const filteredProducts = mockData.products.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category_name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand_name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filteredProducts);
        setLoading(false);
      }, 500);
    } catch (error) {
      toast.error('Failed to fetch products');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      // Simulate delete operation
      setProducts(prev => prev.filter(product => product.product_id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Product Name',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'category_name',
      headerName: 'Category',
      width: 150,
    },
    {
      field: 'brand_name',
      headerName: 'Brand',
      width: 150,
    },
    {
      field: 'base_price',
      headerName: 'Price',
      width: 120,
      renderCell: (params) => (
        <Typography className="font-bold text-green-600">
          ₹{params.value}
        </Typography>
      ),
    },
    {
      field: 'rating_average',
      headerName: 'Rating',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value ? `${params.value} ⭐` : 'N/A'}
          size="small"
          color={params.value >= 4 ? 'success' : 'default'}
          className="font-semibold"
        />
      ),
    },
    {
      field: 'target_role',
      headerName: 'Target',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'both' ? 'primary' : 'default'}
          className="font-semibold"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box className="flex gap-1">
          <Tooltip title="View Details">
            <IconButton
              size="small"
              onClick={() => navigate(`/products/${params.row.product_id}`)}
              className="text-blue-600 hover:bg-blue-50"
            >
              <ViewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Product">
            <IconButton
              size="small"
              onClick={() => navigate(`/products/edit/${params.row.product_id}`)}
              className="text-green-600 hover:bg-green-50"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Product">
            <IconButton
              size="small"
              className="text-red-600 hover:bg-red-50"
              onClick={() => handleDelete(params.row.product_id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box className="p-6">
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Product Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/products/create')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
        >
          Add Product
        </Button>
      </Box>

      <Card className="rounded-xl shadow-lg">
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search products by name, category, or brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-500" />
                </InputAdornment>
              ),
            }}
            className="mb-4 rounded-lg"
            variant="outlined"
          />

          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={products}
              columns={columns}
              loading={loading}
              page={page}
              pageSize={pageSize}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
              rowsPerPageOptions={[10, 25, 50]}
              disableSelectionOnClick
              getRowId={(row) => row.product_id}
              sx={{
                border: 'none',
                '& .MuiDataGrid-cell': {
                  borderBottom: '1px solid #f3f4f6',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#f8fafc',
                  borderBottom: '2px solid #e2e8f0',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                },
                '& .MuiDataGrid-row:hover': { 
                  backgroundColor: '#f1f5f9',
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductListPage;
