import React, { useState, useMemo } from 'react';
import { RefreshCw, Download, Package, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import { STOCK_DATA } from '../api/storeApi';
import StockFilters from '../components/StockFilters';
import StockStats from '../components/StockStats';
import StockTable from '../components/StockTable';
import UpdateStockModal from '../components/UpdateStockModal';
import ViewDetailsModal from '../components/ViewDetailsModal';

const StockManagementPage = () => {
  const [globalSearch, setGlobalSearch] = useState('');
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    product: [],
    variant: [],
    status: []
  });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalVariants = STOCK_DATA.length;
    const inStock = STOCK_DATA.filter(item => item.status === 'In Stock').length;
    const lowStock = STOCK_DATA.filter(item => item.status === 'Low Stock').length;
    const outOfStock = STOCK_DATA.filter(item => item.status === 'Out of Stock').length;
    const inCartWishlist = STOCK_DATA.reduce((sum, item) => sum + item.carts, 0);
    const soldDelivered = STOCK_DATA.reduce((sum, item) => sum + item.sold, 0);
    const totalValue = STOCK_DATA.reduce((sum, item) => sum + (item.price * item.stock), 0);

    return {
      totalVariants,
      inStock,
      lowStock,
      outOfStock,
      inCartWishlist,
      soldDelivered,
      totalValue
    };
  }, []);

  // Filter data
  const filteredData = useMemo(() => {
    let data = [...STOCK_DATA];

    if (globalSearch) {
      const search = globalSearch.toLowerCase();
      data = data.filter(item =>
        item.product.toLowerCase().includes(search) ||
        item.brand.toLowerCase().includes(search) ||
        item.variant.toLowerCase().includes(search) ||
        item.category?.toLowerCase().includes(search) ||
        item.id.toLowerCase().includes(search)
      );
    }

    if (filters.category.length > 0) {
      data = data.filter(item => filters.category.includes(item.category));
    }
    if (filters.brand.length > 0) {
      data = data.filter(item => filters.brand.includes(item.brand));
    }
    if (filters.product.length > 0) {
      data = data.filter(item => filters.product.includes(item.product));
    }
    if (filters.variant.length > 0) {
      data = data.filter(item => filters.variant.includes(item.variant));
    }
    if (filters.status.length > 0) {
      data = data.filter(item => filters.status.includes(item.status));
    }

    if (activeFilter === 'inStock') {
      data = data.filter(item => item.status === 'In Stock');
    } else if (activeFilter === 'lowStock') {
      data = data.filter(item => item.status === 'Low Stock');
    } else if (activeFilter === 'outOfStock') {
      data = data.filter(item => item.status === 'Out of Stock');
    } else if (activeFilter === 'inCart') {
      data = data.filter(item => item.carts > 0);
    } else if (activeFilter === 'sold') {
      data = data.filter(item => item.sold > 0);
    }

    return data;
  }, [globalSearch, filters, activeFilter]);

  const handleFilterChange = (filterType, value) => {
    if (Array.isArray(value)) {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    } else {
      setFilters(prev => {
        const current = prev[filterType];
        if (current.includes(value)) {
          return { ...prev, [filterType]: current.filter(v => v !== value) };
        } else {
          return { ...prev, [filterType]: [...current, value] };
        }
      });
    }
  };

  const clearFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(v => v !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      brand: [],
      product: [],
      variant: [],
      status: []
    });
    setGlobalSearch('');
    setActiveFilter('all');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Product', 'Brand', 'Variant', 'Category', 'Price', 'Stock', 'Carts', 'Available', 'Sold', 'Status'];
    const csvData = filteredData.map(item => [
      item.id,
      item.product,
      item.brand,
      item.variant,
      item.category,
      item.price,
      item.stock,
      item.carts,
      item.available,
      item.sold,
      item.status
    ]);
    
    const csv = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock-management.csv';
    a.click();
  };

  const handleUpdateStock = (item) => {
    setSelectedItem(item);
    setModalType('update');
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setModalType('view');
  };

  const handleStockUpdate = (id, newStock) => {
    console.log('Updating stock for', id, 'to', newStock);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-[1600px] mx-auto p-4 lg:p-8">
        {/* Header Section with Glass Effect */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 mb-8 
                        bg-gradient-to-r from-white/90 to-blue-50/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text 
                               bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  Stock Management
                </h1>
                <p className="text-gray-600 text-sm">Manage your inventory efficiently</p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 
                                px-5 py-3 rounded-xl border border-blue-200/50">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Total Items</p>
                    <p className="text-xl font-bold text-gray-800">{stats.totalVariants}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 
                                px-5 py-3 rounded-xl border border-green-200/50">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Total Value</p>
                    <p className="text-xl font-bold text-gray-800">₹{stats.totalValue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                className={`group flex items-center gap-2 px-6 py-3 
                           bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl
                           hover:from-blue-600 hover:to-blue-700 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                           shadow-lg shadow-blue-500/25 ${isRefreshing ? 'opacity-75' : ''}`}
              >
                <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span className="font-semibold">Refresh</span>
              </button>
              <button
                onClick={handleExportCSV}
                className="group flex items-center gap-2 px-6 py-3 
                           bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl
                           hover:from-emerald-600 hover:to-green-700
                           transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                           shadow-lg shadow-green-500/25"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span className="font-semibold">Export CSV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <StockFilters
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
          filters={filters}
          handleFilterChange={handleFilterChange}
          clearFilter={clearFilter}
          clearAllFilters={clearAllFilters}
        />

        {/* Stats Cards */}
        <StockStats
          stats={stats}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Stock Table */}
        <StockTable
          data={filteredData}
          onUpdateStock={handleUpdateStock}
          onViewDetails={handleViewDetails}
        />

        {/* Modals */}
        {modalType === 'update' && (
          <UpdateStockModal
            item={selectedItem}
            onClose={() => {
              setModalType(null);
              setSelectedItem(null);
            }}
            onUpdate={handleStockUpdate}
          />
        )}
        
        {modalType === 'view' && (
          <ViewDetailsModal
            item={selectedItem}
            onClose={() => {
              setModalType(null);
              setSelectedItem(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default StockManagementPage;
