import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';
import BannerManagement from '../features/BannerManagement';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: '20px' }}><h1>Admin Panel - Electronics Ecommerce</h1><p>Application is running on port 5173</p></div>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/banners" element={<BannerManagement />} />
        <Route path="/banners/create" element={<BannerManagement />} />
        <Route path="/banners/edit/:id" element={<BannerManagement />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
