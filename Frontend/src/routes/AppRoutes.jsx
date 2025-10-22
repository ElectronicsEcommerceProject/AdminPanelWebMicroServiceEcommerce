import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';
import BannerManagement from '../features/BannerManagement';
import LandingPage from '../features/LandingPage';
import CombinedProductManagement from '../features/ProductManagement/pages/CombinedProductManagement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/banners" element={<BannerManagement />} />
      <Route path="/banners/create" element={<BannerManagement />} />
      <Route path="/banners/edit/:id" element={<BannerManagement />} />
      <Route path="/products" element={<CombinedProductManagement />} />
      <Route path="/admin/product-form" element={<CombinedProductManagement />} />
    </Routes>
  );
}

export default AppRoutes;
