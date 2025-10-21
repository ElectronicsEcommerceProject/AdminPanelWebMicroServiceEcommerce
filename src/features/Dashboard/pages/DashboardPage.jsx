// pages/DashboardPage.js (Updated layout to include all components and fill space)
import React, { useState, useEffect } from 'react';
import OverviewStats from '../components/OverviewStats';
import LowStockAlert from '../components/LowStockAlert';
import TopProducts from '../components/TopProducts';
import RecentOrders from '../components/RecentOrders';
import QuickActions from '../components/QuickActions';
import RecentUsers from '../components/RecentUsers';
import RevenueChart from '../components/RevenueChart';
import SalesChart from '../components/SalesChart';
import dashboardApi from '../api/dashboardApi';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    users: { customers: 0, retailers: 0 },
    orders: { all: 0, pending: 0, delivered: 0, returned: 0, processing: 0, cancelled: 0 },
    revenue: { total: 0, last7Days: 0, today: 0 }
  });
  const [alerts, setAlerts] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState({ customer: [], retailer: [] });

  useEffect(() => {
    const fetchData = async () => {
      const statsData = await dashboardApi.getStats();
      const alertsData = await dashboardApi.getLowStockAlerts();
      const productsData = await dashboardApi.getTopProducts();
      const ordersData = await dashboardApi.getRecentOrders();
      
      setStats(statsData);
      setAlerts(alertsData);
      setProducts(productsData);
      setOrders(ordersData);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        <OverviewStats stats={stats} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LowStockAlert alerts={alerts} />
          <TopProducts products={products} />
          <QuickActions />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevenueChart />
          <SalesChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentOrders orders={orders} />
          <RecentUsers />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
