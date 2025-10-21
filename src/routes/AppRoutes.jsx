import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div style={{ padding: '20px' }}><h1>Admin Panel - Electronics Ecommerce</h1><p>Application is running on port 5173</p></div>} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default AppRoutes;
