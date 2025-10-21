import React from 'react';

const StatBox = ({ title, items, border = 'border-blue-300' }) => (
  <div className={`border rounded-md shadow-sm p-4 ${border}`}>
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="grid grid-cols-2 gap-y-2 text-sm">
      {items.map((it, idx) => (
        <div key={idx} className="flex items-center justify-between col-span-2 sm:col-span-1">
          <span className="text-gray-600">{it.label}</span>
          {it.value !== '' ? (
            <span className={it.color}>{it.value}</span>
          ) : (
            <span className={`${it.color}`}>{it.label}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const OverviewStats = () => {
  const totalUsers = [
    { label: 'Customers', value: '0', color: 'text-blue-600' },
    { label: 'Retailers', value: '0', color: 'text-blue-600' },
  ];

  const totalOrders = [
    { label: 'All', value: '0', color: 'text-gray-800' },
    { label: 'Pending', value: '0', color: 'text-orange-600' },
    { label: 'Delivered', value: '0', color: 'text-green-600' },
    { label: 'Cancelled', value: '0', color: 'text-gray-600' },
    { label: 'Returned', value: '0', color: 'text-purple-600' },
    { label: 'Processing', value: '0', color: 'text-orange-600' },
  ];

  const totalRevenue = [
    { label: '₹0', value: '', color: 'text-green-700 font-semibold' },
    { label: 'Last 7 Days', value: '₹0', color: 'text-green-700' },
    { label: 'Today', value: '₹0', color: 'text-green-700' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <StatBox title="Total Users" items={totalUsers} border="border-blue-300" />
      <StatBox title="Total Orders" items={totalOrders} border="border-blue-300" />
      <StatBox title="Total Revenue" items={totalRevenue} border="border-yellow-300" />
    </div>
  );
};

export default OverviewStats;
