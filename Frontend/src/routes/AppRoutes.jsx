import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../features/Dashboard/pages/DashboardPage';
import BannerManagement from '../features/BannerManagement';
import LandingPage from '../features/LandingPage';
import CombinedProductManagement from '../features/ProductManagement/pages/CombinedProductManagement';
import ProductListPage from '../features/ProductManagement/pages/ProductListPage';
import ProductDetailsPage from '../features/ProductManagement/pages/ProductDetailsPage';
import ProductEditPage from '../features/ProductManagement/pages/ProductEditPage';
import ProductCreatePage from '../features/ProductManagement/pages/ProductCreatePage';
import StockManagementPage from '../features/StoreManagement';
import { UserDashboardPage, UserListManagementPage, RetailersApprovalsPage } from '../features/UserManagement';
import { ReviewManagementPage } from '../features/ReviewManagement';
import { CouponManagementPage } from '../features/CouponManagement';
import { NotificationManagementPage } from '../features/NotificationManagement';
import { OrderManagementPage } from '../features/OrderManagement';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/banners" element={<BannerManagement />} />
      <Route path="/banners/create" element={<BannerManagement />} />
      <Route path="/banners/edit/:id" element={<BannerManagement />} />
      
      {/* Product Management Routes */}
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/create" element={<ProductCreatePage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/products/edit/:id" element={<ProductEditPage />} />
      <Route path="/products/dashboard" element={<CombinedProductManagement />} />
      
      {/* Stock Management Route */}
      <Route path="/stock-management" element={<StockManagementPage />} />
      
      {/* User Management Routes */}
      <Route path="/users" element={<UserDashboardPage />} />
      <Route path="/users/list" element={<UserListManagementPage />} />
      <Route path="/users/retailers-approvals" element={<RetailersApprovalsPage />} />
      
      {/* Review Management Route */}
      <Route path="/reviews" element={<ReviewManagementPage />} />
      
      {/* Coupon Management Route */}
      <Route path="/coupons" element={<CouponManagementPage />} />
      
      {/* Notification Management Route */}
      <Route path="/notifications" element={<NotificationManagementPage />} />
      
      {/* Order Management Route */}
      <Route path="/orders" element={<OrderManagementPage />} />
      
      {/* Redirect to products list as default product route */}
      <Route path="/products/*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default AppRoutes;
