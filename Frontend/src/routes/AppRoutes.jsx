import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';
import BannerManagement from '../features/BannerManagement';
import LandingPage from '../features/LandingPage';
import CombinedProductManagement from '../features/ProductManagement/pages/CombinedProductManagement';
import ProductListPage from '../features/ProductManagement/pages/ProductListPage';
import ProductDetailsPage from '../features/ProductManagement/pages/ProductDetailsPage';
import ProductEditPage from '../features/ProductManagement/pages/ProductEditPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/banners" element={<BannerManagement />} />
      <Route path="/banners/create" element={<BannerManagement />} />
      <Route path="/banners/edit/:id" element={<BannerManagement />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/create" element={<CombinedProductManagement />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/products/edit/:id" element={<ProductEditPage />} />
      <Route path="/products/dashboard" element={<CombinedProductManagement />} />
    </Routes>
  );
}

export default AppRoutes;
