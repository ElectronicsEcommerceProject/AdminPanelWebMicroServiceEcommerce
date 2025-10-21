import React, { useState, useEffect } from 'react';
import OverviewStats from '../components/OverviewStats';
import LowStockAlert from '../components/LowStockAlert';
import TopProducts from '../components/TopProducts';
import RecentOrders from '../components/RecentOrders';
import RecentUsers from '../components/RecentUsers';
import RevenueChart from '../components/RevenueChart';
import SalesChart from '../components/SalesChart';
import QuickActions from '../components/QuickActions';
import dashboardApi from '../api/dashboardApi';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    users: { customers: 0, retailers: 0, growth: 0 },
    orders: { all: 0, pending: 0, delivered: 0, returned: 0, processing: 0, cancelled: 0 },
    revenue: { total: 0, last7Days: 0, today: 0, growth: 0 }
  });
  const [alerts, setAlerts] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState({ customer: [], retailer: [] });
  const [users, setUsers] = useState({ customers: [], retailers: [] });
  const [revenueData, setRevenueData] = useState({ data: [], total: 0, growth: 0, average: 0 });
  const [salesData, setSalesData] = useState({ data: [], total: 0, growth: 0, average: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          statsData,
          alertsData,
          productsData,
          ordersData,
          usersData,
          revenueData,
          salesData
        ] = await Promise.all([
          dashboardApi.getStats(),
          dashboardApi.getLowStockAlerts(),
          dashboardApi.getTopProducts(),
          dashboardApi.getRecentOrders(),
          dashboardApi.getRecentUsers(),
          dashboardApi.getRevenueData(),
          dashboardApi.getSalesData()
        ]);
        
        setStats(statsData);
        setAlerts(alertsData);
        setProducts(productsData);
        setOrders(ordersData);
        setUsers(usersData);
        setRevenueData(revenueData);
        setSalesData(salesData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="h-80 bg-gray-200 rounded-xl"></div>
              <div className="h-80 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Overview Stats */}
        <OverviewStats stats={stats} />

        {/* Recent Users Section (Above) */}
        <div className="mb-8">
          <RecentUsers users={users} />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <LowStockAlert alerts={alerts} />
          <TopProducts products={products} />
          <QuickActions />
        </div>

        {/* Recent Orders Section (Below) */}
        <div className="mb-8">
          <RecentOrders orders={orders} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart data={revenueData} />
          <SalesChart data={salesData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
