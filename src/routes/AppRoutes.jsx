import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../core/auth/LoginPage';
import ProtectedRoute from '../core/auth/ProtectedRoute';
import AdminLayout from '../core/layout/AdminLayout';
import { DashboardPage } from '../features/Dashboard';
import { UserListPage } from '../features/UserManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/*" element={
        <ProtectedRoute>
          <AdminLayout>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UserListPage />} />
            </Routes>
          </AdminLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
