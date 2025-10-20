import React from 'react';
import StatCard from '../../../core/components/StatCard';

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="1,234" />
        <StatCard title="Total Orders" value="567" />
        <StatCard title="Revenue" value="₹45,678" />
        <StatCard title="Products" value="890" />
      </div>
    </div>
  );
};

export default DashboardPage;
