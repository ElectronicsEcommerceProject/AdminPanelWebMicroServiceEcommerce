import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';
import BannerManagement from '../features/BannerManagement';
import LandingPage from '../features/LandingPage';
import CombinedProductManagement from '../features/ProductManagement/pages/CombinedProductManagement';
import SmartProductFormPage from '../features/ProductManagement/pages/SmartProductFormPage';
// import StockManagementPage from '../features/StoreManagement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/banners" element={<BannerManagement />} />
      <Route path="/banners/create" element={<BannerManagement />} />
      <Route path="/banners/edit/:id" element={<BannerManagement />} />
      
      {/* Product Management Routes - Unified System */}
      <Route path="/products" element={<CombinedProductManagement />} />
      <Route path="/products/create" element={<SmartProductFormPage />} />
      <Route path="/products/edit" element={<SmartProductFormPage />} />
      
      {/* Stock Management Route */}
      {/* <Route path="/stock-management" element={<StockManagementPage />} /> */}
      
      {/* Redirect to products list as default product route */}
      <Route path="/products/*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default AppRoutes;
