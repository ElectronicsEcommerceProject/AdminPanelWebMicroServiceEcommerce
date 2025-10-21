import React from 'react';
import OverviewStats from '../components/OverviewStats';
import SalesChart from '../components/SalesChart';
import RevenueChart from '../components/RevenueChart';
import LowStockAlert from '../components/LowStockAlert';
import TopProducts from '../components/TopProducts';
import RecentOrders from '../components/RecentOrders';

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      {/* Row 1: Overview cards */}
      <OverviewStats />

      {/* Row 1.5: Orders/Sales/Revenue charts (matching screenshot top row third card shows revenue) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SalesChart />
        <RevenueChart />
      </div>

      {/* Row 2: Low stock, Top products, Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <LowStockAlert />
        <TopProducts />
        <div className="border rounded-md shadow-sm p-4 border-yellow-300">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded py-2">Add Product</button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded py-2">Create Coupon</button>
          </div>
        </div>
      </div>

      {/* Row 3: Latest Orders */}
      <RecentOrders />
    </div>
  );
};

export default DashboardPage;
